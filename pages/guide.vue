<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Style Guide
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the fundamentals of formal wear color coordination with our comprehensive guide. 
          Learn the principles that will transform your wardrobe choices.
        </p>
      </div>

      <!-- Quick Start -->
      <UCard class="p-8 mb-12 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Ready to Match Colors Now?
          </h2>
          <p class="text-blue-800 dark:text-blue-200 mb-6">
            Skip the theory and start getting instant recommendations for your formal wear.
          </p>
          <UButton to="/app" size="lg" class="bg-blue-600 hover:bg-blue-700">
            Open Color Matcher
            <UIcon name="i-lucide-arrow-right" class="ml-2" />
          </UButton>
        </div>
      </UCard>

      <!-- Core Principles -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Core Color Principles
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <UCard class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🎯 Contrast is Key
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              The foundation of sharp formal wear is proper contrast between your suit, shirt, and tie. 
              Light shirts with dark suits create classic, professional looks.
            </p>
            <div class="flex space-x-3">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-gray-800 rounded border-2 border-gray-300"/>
                <span class="text-xs mt-1">Dark Suit</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-white rounded border-2 border-gray-300"/>
                <span class="text-xs mt-1">Light Shirt</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-red-700 rounded border-2 border-gray-300"/>
                <span class="text-xs mt-1">Bold Tie</span>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🌈 Color Temperature
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Understanding warm vs. cool tones helps create harmonious combinations. 
              Stick within the same temperature family for sophisticated looks.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm font-medium mb-2">Warm Tones</p>
                <div class="flex space-x-2">
                  <div class="w-6 h-6 bg-amber-700 rounded"/>
                  <div class="w-6 h-6 bg-orange-800 rounded"/>
                  <div class="w-6 h-6 bg-red-800 rounded"/>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium mb-2">Cool Tones</p>
                <div class="flex space-x-2">
                  <div class="w-6 h-6 bg-blue-700 rounded"/>
                  <div class="w-6 h-6 bg-green-700 rounded"/>
                  <div class="w-6 h-6 bg-purple-700 rounded"/>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Occasion Guidelines -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Dressing for Different Occasions
        </h2>
        
        <div class="space-y-8">
          <UCard class="p-6">
            <div class="flex items-start space-x-4">
              <div class="text-4xl">💼</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Business Professional
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Conservative, authoritative looks that command respect in corporate environments.
                </p>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Suits:</strong> Navy, charcoal, dark gray
                  </div>
                  <div>
                    <strong>Shirts:</strong> White, light blue, subtle patterns
                  </div>
                  <div>
                    <strong>Ties:</strong> Conservative patterns, solid colors
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <div class="flex items-start space-x-4">
              <div class="text-4xl">🥂</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Formal Events
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Elegant sophistication for weddings, galas, and special celebrations.
                </p>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Suits:</strong> Black, midnight blue, dark charcoal
                  </div>
                  <div>
                    <strong>Shirts:</strong> Crisp white, wing collar for black-tie
                  </div>
                  <div>
                    <strong>Accessories:</strong> Bow ties, pocket squares, cufflinks
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <div class="flex items-start space-x-4">
              <div class="text-4xl">🌞</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Daytime Events
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Lighter, more relaxed formal wear appropriate for daytime celebrations.
                </p>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Suits:</strong> Light gray, tan, subtle patterns
                  </div>
                  <div>
                    <strong>Shirts:</strong> White, light colors, textures
                  </div>
                  <div>
                    <strong>Ties:</strong> Brighter colors, interesting patterns
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Common Mistakes to Avoid
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <UCard class="p-6 border-red-200 dark:border-red-800">
            <div class="flex items-center mb-4">
              <UIcon name="i-lucide-x-circle" class="text-red-500 mr-2 text-xl" />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Don't: Monochromatic Everything
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Wearing all the same color (black suit, black shirt, black tie) 
              eliminates contrast and can look flat or overly casual.
            </p>
          </UCard>

          <UCard class="p-6 border-green-200 dark:border-green-800">
            <div class="flex items-center mb-4">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mr-2 text-xl" />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Do: Layer Different Tones
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Mix different shades and create visual interest with varying 
              levels of darkness and texture between your pieces.
            </p>
          </UCard>

          <UCard class="p-6 border-red-200 dark:border-red-800">
            <div class="flex items-center mb-4">
              <UIcon name="i-lucide-x-circle" class="text-red-500 mr-2 text-xl" />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Don't: Ignore Undertones
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Mixing warm and cool undertones can create discord. 
              A warm brown tie with a cool blue suit often clashes.
            </p>
          </UCard>

          <UCard class="p-6 border-green-200 dark:border-green-800">
            <div class="flex items-center mb-4">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mr-2 text-xl" />
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Do: Match Temperature Families
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Keep colors within the same temperature family for 
              harmonious, sophisticated combinations.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Quick Reference -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Quick Reference Guide
        </h2>
        
        <UCard class="p-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Safe Starter Combinations
              </h3>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Navy suit + white shirt + red tie</li>
                <li>• Charcoal suit + light blue shirt + navy tie</li>
                <li>• Black suit + white shirt + black/silver tie</li>
                <li>• Gray suit + white shirt + burgundy tie</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Must-Have Colors
              </h3>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Navy blue suit (most versatile)</li>
                <li>• White dress shirts (essential base)</li>
                <li>• Red/burgundy ties (classic accent)</li>
                <li>• Charcoal gray suit (professional)</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Pattern Mixing Rules
              </h3>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Different scale patterns work together</li>
                <li>• Limit to 2-3 patterns maximum</li>
                <li>• Solid colors break up busy patterns</li>
                <li>• Match one color across patterns</li>
              </ul>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Put This Into Practice?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Use our AI-powered color matcher to apply these principles and get instant, 
          personalized recommendations for any occasion.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/app" size="xl" class="px-8 py-4">
            Start Color Matching
            <UIcon name="i-lucide-palette" class="ml-2" />
          </UButton>
          <UButton to="/examples" variant="outline" size="xl" class="px-8 py-4">
            See Examples
            <UIcon name="i-lucide-eye" class="ml-2" />
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta tags for the guide page
useSeoMeta({
  title: 'Style Guide - Master Formal Wear Color Coordination | SuitColorMatch',
  description: 'Learn the fundamentals of formal wear color coordination. Master contrast, color temperature, and occasion-appropriate styling with our comprehensive guide.',
  ogTitle: 'Style Guide - Master Formal Wear Color Coordination',
  ogDescription: 'Learn the fundamentals of formal wear color coordination. Master contrast, color temperature, and occasion-appropriate styling.',
  robots: 'index,follow'
})
</script> 