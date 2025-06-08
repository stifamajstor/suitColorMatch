/**
 * Composable for managing occasion data and related functionality
 */
export const useOccasions = () => {
  // Standard occasion options available in the app
  const occasions = ref([
    {
      id: 'business-professional',
      title: 'Business Professional',
      description: 'Corporate meetings, presentations, and formal business events',
      icon: '💼',
      tags: ['Formal', 'Conservative'],
      formalityLevel: 9,
      colorThemes: ['navy', 'charcoal', 'black', 'dark-gray']
    },
    {
      id: 'creative-professional',
      title: 'Creative Professional', 
      description: 'Industry events, creative conferences, and networking gatherings',
      icon: '🎨',
      tags: ['Modern', 'Expressive'],
      formalityLevel: 7,
      colorThemes: ['burgundy', 'forest-green', 'midnight-blue', 'purple']
    },
    {
      id: 'formal-evening',
      title: 'Formal Evening',
      description: 'Galas, awards ceremonies, and black-tie events',
      icon: '🌙', 
      tags: ['Elegant', 'Sophisticated'],
      formalityLevel: 10,
      colorThemes: ['black', 'midnight-blue', 'charcoal']
    },
    {
      id: 'social-casual',
      title: 'Social/Casual',
      description: 'Parties, dates, and social gatherings with friends',
      icon: '🎉',
      tags: ['Relaxed', 'Versatile'],
      formalityLevel: 5,
      colorThemes: ['light-gray', 'tan', 'olive', 'brown', 'burgundy']
    }
  ])

  /**
   * Get occasion by ID
   * @param {string} occasionId - The ID of the occasion to find
   * @returns {Object|null} The occasion object or null if not found
   */
  const getOccasionById = (occasionId) => {
    return occasions.value.find(occasion => occasion.id === occasionId) || null
  }

  /**
   * Get occasions filtered by formality level
   * @param {number} minLevel - Minimum formality level
   * @param {number} maxLevel - Maximum formality level  
   * @returns {Array} Filtered occasions array
   */
  const getOccasionsByFormality = (minLevel = 0, maxLevel = 10) => {
    return occasions.value.filter(occasion => 
      occasion.formalityLevel >= minLevel && occasion.formalityLevel <= maxLevel
    )
  }

  /**
   * Get color themes for a specific occasion
   * @param {string} occasionId - The ID of the occasion
   * @returns {Array} Array of color theme names
   */
  const getColorThemesForOccasion = (occasionId) => {
    const occasion = getOccasionById(occasionId)
    return occasion ? occasion.colorThemes : []
  }

  /**
   * Check if an occasion allows certain color themes
   * @param {string} occasionId - The ID of the occasion
   * @param {Array} colorThemes - Array of color theme names to check
   * @returns {boolean} True if all themes are allowed for this occasion
   */
  const isColorThemeAllowed = (occasionId, colorThemes) => {
    const allowedThemes = getColorThemesForOccasion(occasionId)
    return colorThemes.every(theme => allowedThemes.includes(theme))
  }

  return {
    occasions: readonly(occasions),
    getOccasionById,
    getOccasionsByFormality,
    getColorThemesForOccasion,
    isColorThemeAllowed
  }
} 