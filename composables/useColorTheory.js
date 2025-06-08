import colorsData from '~/data/colors.json'
import schemesData from '~/data/schemes.json'

export const useColorTheory = () => {
  // Color conversion utilities
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const rgbToHsl = (r, g, b) => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    }
  }

  const hslToRgb = (h, s, l) => {
    h /= 360
    s /= 100
    l /= 100

    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }

    let r, g, b

    if (s === 0) {
      r = g = b = l // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1/3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1/3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  const hexToHsl = (hex) => {
    const rgb = hexToRgb(hex)
    return rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null
  }

  const hslToHex = (h, s, l) => {
    const rgb = hslToRgb(h, s, l)
    return rgbToHex(rgb.r, rgb.g, rgb.b)
  }

  // Core color theory algorithms
  const generateMonochromaticColors = (baseColor, options = {}) => {
    const {
      variations = 5,
      saturationRange = [15, 85],
      lightnessRange = [20, 80],
      includeBase = true
    } = options

    const baseHsl = typeof baseColor === 'string' ? hexToHsl(baseColor) : baseColor
    if (!baseHsl) return []

    const colors = []
    const scheme = schemesData.colorSchemes.monochromatic

    // Generate light variations
    const lightVars = scheme.harmonies.light
    lightVars.lightnessMultiplier.forEach((lightMult, index) => {
      const satMult = lightVars.saturationMultiplier[index] || 0.6
      const newL = Math.min(lightnessRange[1], baseHsl.l * lightMult)
      const newS = Math.max(saturationRange[0], baseHsl.s * satMult)
      
      colors.push({
        hex: hslToHex(baseHsl.h, newS, newL),
        hsl: { h: baseHsl.h, s: newS, l: newL },
        variant: 'light',
        description: `Light variation ${index + 1}`
      })
    })

    // Include base color if requested
    if (includeBase) {
      colors.push({
        hex: typeof baseColor === 'string' ? baseColor : hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
        hsl: baseHsl,
        variant: 'base',
        description: 'Base color'
      })
    }

    // Generate dark variations
    const darkVars = scheme.harmonies.dark
    darkVars.lightnessMultiplier.forEach((lightMult, index) => {
      const satMult = darkVars.saturationMultiplier[index] || 1.1
      const newL = Math.max(lightnessRange[0], baseHsl.l * lightMult)
      const newS = Math.min(saturationRange[1], baseHsl.s * satMult)
      
      colors.push({
        hex: hslToHex(baseHsl.h, newS, newL),
        hsl: { h: baseHsl.h, s: newS, l: newL },
        variant: 'dark',
        description: `Dark variation ${index + 1}`
      })
    })

    return colors.slice(0, variations)
  }

  const generateAnalogousColors = (baseColor, options = {}) => {
    const {
      count = 5,
      stepSize = 15,
      includeBase = true
    } = options

    const baseHsl = typeof baseColor === 'string' ? hexToHsl(baseColor) : baseColor
    if (!baseHsl) return []

    const colors = []
    const steps = Math.floor(count / 2)

    // Generate colors on both sides of the base hue
    for (let i = -steps; i <= steps; i++) {
      if (i === 0 && !includeBase) continue
      
      const hueOffset = i * stepSize
      const newHue = (baseHsl.h + hueOffset + 360) % 360
      
      // Slight variations in saturation and lightness for visual interest
      const saturationVariation = Math.random() * 10 - 5 // ±5%
      const lightnessVariation = Math.random() * 8 - 4 // ±4%
      
      const newS = Math.max(10, Math.min(90, baseHsl.s + saturationVariation))
      const newL = Math.max(15, Math.min(85, baseHsl.l + lightnessVariation))

      colors.push({
        hex: hslToHex(newHue, newS, newL),
        hsl: { h: newHue, s: newS, l: newL },
        variant: i === 0 ? 'base' : (i < 0 ? 'cooler' : 'warmer'),
        description: i === 0 ? 'Base color' : `Analogous ${Math.abs(i * stepSize)}° ${i < 0 ? 'cooler' : 'warmer'}`
      })
    }

    return colors.slice(0, count)
  }

  const generateTriadicColors = (baseColor, options = {}) => {
    const {
      balanceApproach = 'dominant',
      saturationMode = 'muted'
    } = options

    const baseHsl = typeof baseColor === 'string' ? hexToHsl(baseColor) : baseColor
    if (!baseHsl) return []

    const triadicScheme = schemesData.colorSchemes.triadic
    const harmonySettings = triadicScheme.harmonies[saturationMode] || triadicScheme.harmonies.muted

    // Calculate triadic hues (120° apart)
    const hue1 = (baseHsl.h + 120) % 360
    const hue2 = (baseHsl.h + 240) % 360

    const satRange = harmonySettings.saturationRange
    const lightRange = harmonySettings.lightnessRange

    const baseSat = Math.max(satRange[0], Math.min(satRange[1], baseHsl.s))
    const baseLight = Math.max(lightRange[0], Math.min(lightRange[1], baseHsl.l))

    const colors = [
      {
        hex: hslToHex(baseHsl.h, baseSat, baseLight),
        hsl: { h: baseHsl.h, s: baseSat, l: baseLight },
        variant: 'primary',
        description: 'Primary triadic color',
        weight: triadicScheme.balance[balanceApproach].ratios[0]
      },
      {
        hex: hslToHex(hue1, baseSat * 0.9, baseLight * 1.1),
        hsl: { h: hue1, s: baseSat * 0.9, l: baseLight * 1.1 },
        variant: 'secondary',
        description: 'Secondary triadic color (+120°)',
        weight: triadicScheme.balance[balanceApproach].ratios[1]
      },
      {
        hex: hslToHex(hue2, baseSat * 0.8, baseLight * 0.9),
        hsl: { h: hue2, s: baseSat * 0.8, l: baseLight * 0.9 },
        variant: 'tertiary',
        description: 'Tertiary triadic color (+240°)',
        weight: triadicScheme.balance[balanceApproach].ratios[2]
      }
    ]

    return colors
  }

  const generateComplementaryColors = (baseColor, options = {}) => {
    const {
      contrastLevel = 'subtle',
      includeBase = true
    } = options

    const baseHsl = typeof baseColor === 'string' ? hexToHsl(baseColor) : baseColor
    if (!baseHsl) return []

    const complementaryScheme = schemesData.colorSchemes.complementary
    const harmonySettings = complementaryScheme.harmonies[contrastLevel] || complementaryScheme.harmonies.subtle

    // Calculate complementary hue (180° opposite)
    const complementHue = (baseHsl.h + 180) % 360

    const colors = []

    if (includeBase) {
      colors.push({
        hex: typeof baseColor === 'string' ? baseColor : hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
        hsl: baseHsl,
        variant: 'base',
        description: 'Base color',
        weight: 85
      })
    }

    const satRange = harmonySettings.saturationRange
    const complementSat = Math.max(satRange[0], Math.min(satRange[1], baseHsl.s))
    const complementLight = harmonySettings.lightnessContrast === 'maximum' 
      ? (baseHsl.l > 50 ? 20 : 80) 
      : baseHsl.l

    colors.push({
      hex: hslToHex(complementHue, complementSat, complementLight),
      hsl: { h: complementHue, s: complementSat, l: complementLight },
      variant: 'complement',
      description: 'Complementary color',
      weight: 15
    })

    return colors
  }

  const generateSplitComplementaryColors = (baseColor) => {
    const baseHsl = typeof baseColor === 'string' ? hexToHsl(baseColor) : baseColor
    if (!baseHsl) return []

    // Split complementary: base color + two colors adjacent to its complement
    const complementHue = (baseHsl.h + 180) % 360
    const splitHue1 = (complementHue + 30) % 360  // +30° from complement
    const splitHue2 = (complementHue - 30 + 360) % 360  // -30° from complement

    const colors = [
      {
        hex: typeof baseColor === 'string' ? baseColor : hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
        hsl: baseHsl,
        variant: 'base',
        description: 'Base color',
        weight: 70
      },
      {
        hex: hslToHex(splitHue1, baseHsl.s * 0.8, baseHsl.l),
        hsl: { h: splitHue1, s: baseHsl.s * 0.8, l: baseHsl.l },
        variant: 'split1',
        description: 'Split complementary +30°',
        weight: 20
      },
      {
        hex: hslToHex(splitHue2, baseHsl.s * 0.8, baseHsl.l),
        hsl: { h: splitHue2, s: baseHsl.s * 0.8, l: baseHsl.l },
        variant: 'split2',
        description: 'Split complementary -30°',
        weight: 10
      }
    ]

    return colors
  }

  // Enhanced triadic integration system
  const generateAdvancedTriadicCombinations = (baseColor, context = {}) => {
    const {
      occasion = 'business_professional',
      intensity = 'balanced',
      includeVariations = true
    } = context

    const baseTriadic = generateTriadicColors(baseColor, { 
      balanceApproach: intensity,
      saturationMode: occasion === 'business_professional' ? 'muted' : 'vibrant'
    })

    if (!includeVariations) return [{ type: 'standard', colors: baseTriadic }]

    // Generate multiple triadic variations
    const combinations = []

    // Standard triadic
    combinations.push({
      type: 'standard',
      colors: baseTriadic,
      description: 'Classic triadic balance',
      suitability: getSuitabilityScore('triadic', occasion)
    })

    // Muted triadic for professional settings
    if (occasion === 'business_professional' || occasion === 'formal_evening') {
      const mutedTriadic = generateTriadicColors(baseColor, {
        balanceApproach: 'dominant',
        saturationMode: 'muted'
      })
      combinations.push({
        type: 'muted',
        colors: mutedTriadic,
        description: 'Professional triadic with reduced saturation',
        suitability: getSuitabilityScore('triadic_muted', occasion)
      })
    }

    // Vibrant triadic for creative settings
    if (occasion === 'creative_professional' || occasion === 'social_casual') {
      const vibrantTriadic = generateTriadicColors(baseColor, {
        balanceApproach: 'balanced',
        saturationMode: 'vibrant'
      })
      combinations.push({
        type: 'vibrant',
        colors: vibrantTriadic,
        description: 'Bold triadic for creative expression',
        suitability: getSuitabilityScore('triadic_vibrant', occasion)
      })
    }

    return combinations.sort((a, b) => b.suitability - a.suitability)
  }

  const getSuitabilityScore = (schemeType, occasion) => {
    const contextRules = schemesData.contextualRules[occasion]
    if (!contextRules) return 5

    let score = 5

    // Base scoring for scheme types
    if (contextRules.preferredSchemes.includes('triadic')) {
      score += 3
      
      // Additional scoring for specific triadic variants
      if (schemeType === 'triadic_muted' && occasion === 'business_professional') score += 2
      if (schemeType === 'triadic_vibrant' && occasion === 'creative_professional') score += 2
    }

    if (contextRules.avoidSchemes && contextRules.avoidSchemes.includes(schemeType)) {
      score -= 5
    }

    return Math.max(0, score)
  }

  // Comprehensive color matching system
  const generateCompleteColorPalette = (baseColor, context = {}) => {
    const {
      occasion = 'business_professional',
      includeAll = false,
      maxSchemes = 3
    } = context

    const schemes = []

    // Generate all available color schemes
    const monochromatic = {
      type: 'monochromatic',
      colors: generateMonochromaticColors(baseColor),
      description: 'Sophisticated single-hue variations',
      suitability: getSuitabilityScore('monochromatic', occasion)
    }

    const analogous = {
      type: 'analogous',
      colors: generateAnalogousColors(baseColor),
      description: 'Harmonious adjacent colors',
      suitability: getSuitabilityScore('analogous', occasion)
    }

    const triadic = {
      type: 'triadic',
      colors: generateTriadicColors(baseColor),
      description: 'Balanced three-color harmony',
      suitability: getSuitabilityScore('triadic', occasion)
    }

    const complementary = {
      type: 'complementary',
      colors: generateComplementaryColors(baseColor),
      description: 'High-contrast opposite colors',
      suitability: getSuitabilityScore('complementary', occasion)
    }

    const splitComplementary = {
      type: 'split_complementary',
      colors: generateSplitComplementaryColors(baseColor),
      description: 'Balanced contrast variation',
      suitability: getSuitabilityScore('split_complementary', occasion)
    }

    schemes.push(monochromatic, analogous, triadic, complementary, splitComplementary)

    // Sort by suitability and return appropriate number
    const sortedSchemes = schemes.sort((a, b) => b.suitability - a.suitability)
    
    return includeAll ? sortedSchemes : sortedSchemes.slice(0, maxSchemes)
  }

  // Utility functions for color matching
  const getColorById = (colorId) => {
    for (const [occasion, data] of Object.entries(colorsData.occasions)) {
      const color = data.colors.find(c => c.id === colorId)
      if (color) {
        return { ...color, occasion }
      }
    }
    return null
  }

  const getColorsByOccasion = (occasion) => {
    return colorsData.occasions[occasion]?.colors || []
  }

  const getColorTemperature = (color) => {
    const colorData = typeof color === 'string' ? getColorById(color) : color
    return colorData?.colorTemperature || 'neutral'
  }

  const isSeasonalMatch = (color, season) => {
    const colorData = typeof color === 'string' ? getColorById(color) : color
    return colorData?.seasonality?.includes(season) || colorData?.seasonality?.includes('all')
  }

  const calculateColorHarmony = (color1, color2) => {
    const hsl1 = typeof color1 === 'string' ? hexToHsl(color1) : color1.hsl || hexToHsl(color1.hex)
    const hsl2 = typeof color2 === 'string' ? hexToHsl(color2) : color2.hsl || hexToHsl(color2.hex)
    
    if (!hsl1 || !hsl2) return 0

    const hueDiff = Math.abs(hsl1.h - hsl2.h)
    const normalizedHueDiff = Math.min(hueDiff, 360 - hueDiff)

    // Score based on color theory relationships
    if (normalizedHueDiff < 30) return 'analogous'
    if (normalizedHueDiff > 150 && normalizedHueDiff < 210) return 'complementary'
    if (normalizedHueDiff > 110 && normalizedHueDiff < 130) return 'triadic'
    if (normalizedHueDiff > 230 && normalizedHueDiff < 250) return 'triadic'
    
    return 'neutral'
  }

  const getOptimalColorScheme = (baseColor, context = {}) => {
    const {
      occasion = 'business_professional',
      preferredScheme = null
    } = context

    const contextRules = schemesData.contextualRules[occasion] || schemesData.contextualRules.business
    const schemes = preferredScheme ? [preferredScheme] : contextRules.preferredSchemes

    // Generate color combinations for each suitable scheme
    const recommendations = schemes.map(scheme => {
      let colors = []
      let description = ''

      switch (scheme) {
        case 'monochromatic':
          colors = generateMonochromaticColors(baseColor, { variations: 5 })
          description = 'Monochromatic scheme - sophisticated and professional'
          break
        case 'analogous':
          colors = generateAnalogousColors(baseColor, { count: 5 })
          description = 'Analogous scheme - harmonious and natural'
          break
        case 'triadic':
          colors = generateTriadicColors(baseColor, { balanceApproach: 'dominant' })
          description = 'Triadic scheme - balanced and dynamic'
          break
        case 'complementary':
          colors = generateComplementaryColors(baseColor)
          description = 'Complementary scheme - high contrast and bold'
          break
        case 'split_complementary':
          colors = generateSplitComplementaryColors(baseColor)
          description = 'Split complementary - vibrant yet balanced'
          break
        default:
          colors = generateMonochromaticColors(baseColor)
          description = 'Default monochromatic scheme'
      }

      return {
        scheme,
        colors,
        description,
        suitability: calculateSchemeSuitability(scheme, occasion)
      }
    })

    return recommendations.sort((a, b) => b.suitability - a.suitability)
  }

  const calculateSchemeSuitability = (scheme, occasion) => {
    const contextRules = schemesData.contextualRules[occasion]
    if (!contextRules) return 5

    let score = 5

    if (contextRules.preferredSchemes.includes(scheme)) {
      score += 3
    }

    if (contextRules.avoidSchemes && contextRules.avoidSchemes.includes(scheme)) {
      score -= 5
    }

    return Math.max(0, score)
  }

  return {
    // Color conversion utilities
    hexToRgb,
    rgbToHsl,
    hslToRgb,
    rgbToHex,
    hexToHsl,
    hslToHex,

    // Core color theory algorithms
    generateMonochromaticColors,
    generateAnalogousColors,
    generateTriadicColors,
    generateComplementaryColors,
    generateSplitComplementaryColors,

    // Enhanced triadic integration
    generateAdvancedTriadicCombinations,
    generateCompleteColorPalette,
    getSuitabilityScore,

    // Utility functions
    getColorById,
    getColorsByOccasion,
    getColorTemperature,
    isSeasonalMatch,
    calculateColorHarmony,
    getOptimalColorScheme,
    calculateSchemeSuitability
  }
} 