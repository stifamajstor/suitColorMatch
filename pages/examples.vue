<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Style Examples
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          See proven color combinations in action. Get inspired by these expertly-curated 
          formal wear looks for every professional situation.
        </p>
      </div>

      <!-- Quick Action -->
      <UCard class="p-8 mb-12 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            Create Your Own Combinations
          </h2>
          <p class="text-green-800 dark:text-green-200 mb-6">
            Inspired by these examples? Use our AI matcher to generate personalized recommendations.
          </p>
          <UButton to="/app" size="lg" class="bg-green-600 hover:bg-green-700">
            Start Color Matching
            <UIcon name="i-lucide-sparkles" class="ml-2" />
          </UButton>
        </div>
      </UCard>

      <!-- Business Professional -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <div class="text-4xl mr-4">💼</div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Business Professional
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Command respect in corporate environments
            </p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Example 1 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                The Executive
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Board meetings, C-level presentations
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-800 rounded border mr-2"/>
                  <span class="text-sm">Charcoal Gray</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-white rounded border mr-2"/>
                  <span class="text-sm">Crisp White</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-red-800 rounded border mr-2"/>
                  <span class="text-sm">Deep Burgundy</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why it works:</strong> Classic contrast with authoritative burgundy accent
            </div>
          </UCard>

          <!-- Example 2 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                The Professional
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Daily office wear, client meetings
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-900 rounded border mr-2"/>
                  <span class="text-sm">Navy Blue</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-100 rounded border mr-2"/>
                  <span class="text-sm">Light Blue</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-yellow-600 rounded border mr-2"/>
                  <span class="text-sm">Gold Pattern</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why it works:</strong> Navy foundation with complementary warm accent
            </div>
          </UCard>

          <!-- Example 3 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                The Conservative
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Banking, law, traditional industries
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-700 rounded border mr-2"/>
                  <span class="text-sm">Dark Gray</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-white rounded border mr-2"/>
                  <span class="text-sm">Pure White</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-800 rounded border mr-2"/>
                  <span class="text-sm">Navy Stripe</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why it works:</strong> Ultra-conservative with subtle pattern interest
            </div>
          </UCard>
        </div>
      </section>

      <!-- Formal Events -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <div class="text-4xl mr-4">🥂</div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Formal Events
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Elegant sophistication for special occasions
            </p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Black Tie -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Black Tie
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Galas, awards ceremonies, evening events
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tuxedo</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-black rounded border mr-2"/>
                  <span class="text-sm">Black</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-white rounded border mr-2"/>
                  <span class="text-sm">Wing Collar</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Bow Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-black rounded border mr-2"/>
                  <span class="text-sm">Black Silk</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Classic standard:</strong> The timeless formal evening look
            </div>
          </UCard>

          <!-- Wedding Guest -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Wedding Guest
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Afternoon/evening wedding celebration
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-600 rounded border mr-2"/>
                  <span class="text-sm">Medium Gray</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-50 rounded border mr-2"/>
                  <span class="text-sm">Soft Blue</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-purple-600 rounded border mr-2"/>
                  <span class="text-sm">Purple Floral</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Celebration appropriate:</strong> Festive but not attention-stealing
            </div>
          </UCard>

          <!-- Cocktail Event -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cocktail Party
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Networking events, semi-formal gatherings
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-900 rounded border mr-2"/>
                  <span class="text-sm">Midnight Blue</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-white rounded border mr-2"/>
                  <span class="text-sm">Crisp White</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-emerald-700 rounded border mr-2"/>
                  <span class="text-sm">Forest Green</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Sophisticated choice:</strong> Rich colors for evening sophistication
            </div>
          </UCard>
        </div>
      </section>

      <!-- Daytime Events -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <div class="text-4xl mr-4">🌞</div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Daytime Events
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Lighter, more relaxed formal occasions
            </p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Garden Party -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Garden Party
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Outdoor daytime celebration
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-stone-400 rounded border mr-2"/>
                  <span class="text-sm">Light Tan</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-white rounded border mr-2"/>
                  <span class="text-sm">Fresh White</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-green-600 rounded border mr-2"/>
                  <span class="text-sm">Garden Green</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Season appropriate:</strong> Light, natural colors for outdoor settings
            </div>
          </UCard>

          <!-- Brunch Wedding -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Brunch Wedding
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Morning/early afternoon ceremony
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-400 rounded border mr-2"/>
                  <span class="text-sm">Pearl Gray</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-pink-50 rounded border mr-2"/>
                  <span class="text-sm">Soft Pink</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-600 rounded border mr-2"/>
                  <span class="text-sm">Sky Blue</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Soft elegance:</strong> Gentle colors perfect for daytime romance
            </div>
          </UCard>

          <!-- Business Lunch -->
          <UCard class="p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Business Lunch
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Daytime client meetings, presentations
              </p>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Suit</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-blue-700 rounded border mr-2"/>
                  <span class="text-sm">Navy Blue</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Shirt</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-yellow-50 rounded border mr-2"/>
                  <span class="text-sm">Cream</span>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-sm font-medium">Tie</span>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-orange-600 rounded border mr-2"/>
                  <span class="text-sm">Burnt Orange</span>
                </div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <strong>Professional warmth:</strong> Approachable yet authoritative
            </div>
          </UCard>
        </div>
      </section>

      <!-- Pro Tips -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Pro Styling Tips
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <UCard class="p-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <UIcon name="i-lucide-lightbulb" class="text-yellow-500 mr-2" />
              Color Coordination Rules
            </h3>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <UIcon name="i-lucide-check" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Match undertones: warm with warm, cool with cool</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-lucide-check" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Create contrast between suit and shirt</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-lucide-check" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Use tie as accent piece to tie colors together</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-lucide-check" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Consider the setting: formal vs casual environments</span>
              </li>
            </ul>
          </UCard>

          <UCard class="p-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <UIcon name="i-lucide-calendar" class="text-blue-500 mr-2" />
              Seasonal Considerations
            </h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Spring/Summer</h4>
                <ul class="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Lighter fabric weights</li>
                  <li>• Brighter accent colors</li>
                  <li>• Cream and light blue shirts</li>
                  <li>• Tan and light gray suits</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Fall/Winter</h4>
                <ul class="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Heavier fabric textures</li>
                  <li>• Deeper, richer colors</li>
                  <li>• White and light blue shirts</li>
                  <li>• Navy and charcoal suits</li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Create Your Perfect Look?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          These examples are just the beginning. Use our AI-powered matcher to discover 
          combinations perfectly tailored to your style and occasions.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/app" size="xl" class="px-8 py-4">
            Start Matching Colors
            <UIcon name="i-lucide-palette" class="ml-2" />
          </UButton>
          <UButton to="/guide" variant="outline" size="xl" class="px-8 py-4">
            Learn the Principles
            <UIcon name="i-lucide-book-open" class="ml-2" />
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta tags for the examples page
useSeoMeta({
  title: 'Style Examples - Formal Wear Color Combinations | SuitColorMatch',
  description: 'Discover expertly-curated formal wear color combinations for business, weddings, and special events. Get inspired by proven professional looks.',
  ogTitle: 'Style Examples - Formal Wear Color Combinations',
  ogDescription: 'Discover expertly-curated formal wear color combinations for business, weddings, and special events.',
  robots: 'index,follow'
})
</script> 