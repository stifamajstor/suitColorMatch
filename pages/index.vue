<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative container mx-auto px-4 py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Master Your Formal Style
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the guesswork out of formal wear. Get AI-powered color coordination that ensures you look professionally sharp for every occasion.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <UButton 
              to="/app" 
              size="xl" 
              class="px-8 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              Start Matching Colors
              <UIcon name="i-lucide-arrow-right" class="ml-2" />
            </UButton>
            <UButton 
              to="/guide" 
              variant="outline" 
              size="xl" 
              class="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white/10"
            >
              Learn the Basics
            </UButton>
          </div>

          <!-- Social Proof -->
          <div class="text-blue-200 text-sm">
            <p>Trusted by professionals who need to look their best</p>
            <div class="flex justify-center items-center mt-4 space-x-8">
              <div class="flex items-center">
                <UIcon name="i-lucide-users" class="mr-2" />
                <span>500+ Users</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-lucide-star" class="mr-2" />
                <span>Perfect Matches</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-lucide-shield-check" class="mr-2" />
                <span>Style Confident</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Target User Personas -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Perfect for Every Professional
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're building your career or leading from the boardroom, 
              confident style choices make all the difference.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Young Professional -->
            <UCard class="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div class="text-6xl mb-6">👨‍💼</div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Young Professional
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Building your wardrobe and reputation. Get it right from day one with 
                foolproof color combinations that always work.
              </p>
              <ul class="text-left text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Entry-level appropriate choices
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Budget-conscious options
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Interview-ready looks
                </li>
              </ul>
            </UCard>

            <!-- Business Executive -->
            <UCard class="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-blue-200 dark:border-blue-800">
              <div class="text-6xl mb-6">🤵</div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Business Executive
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Leading meetings and closing deals. Project authority and sophistication 
                with advanced color coordination strategies.
              </p>
              <ul class="text-left text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Executive presence styling
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Board meeting appropriate
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Premium fabric guidance
                </li>
              </ul>
              <UBadge color="blue" variant="soft" class="mt-4">Most Popular</UBadge>
            </UCard>

            <!-- Special Events -->
            <UCard class="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div class="text-6xl mb-6">🎩</div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Special Occasions
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Weddings, galas, and formal events. Stand out for all the right reasons 
                with occasion-specific color palettes.
              </p>
              <ul class="text-left text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Wedding guest appropriate
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Black-tie event ready
                </li>
                <li class="flex items-center">
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2" />
                  Seasonal considerations
                </li>
              </ul>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why SuitColorMatch Works
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Scientifically-backed color theory meets modern style intelligence
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Features List -->
            <div class="space-y-8">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-palette" class="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    AI-Powered Color Analysis
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Advanced algorithms analyze undertones, contrast, and harmony to suggest 
                    combinations that enhance your natural coloring.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-calendar" class="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Occasion-Specific Guidance
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Different settings call for different approaches. Get contextual recommendations 
                    for business, formal events, and everything in between.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-eye" class="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Visual Fabric Textures
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    See how colors look on different fabric types. Preview combinations 
                    before you buy or wear them.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-zap" class="text-orange-600 dark:text-orange-400 text-xl" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Instant Recommendations
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    No more standing in your closet wondering what works. Get immediate, 
                    confident answers for any formal wear situation.
                  </p>
                </div>
              </div>
            </div>

            <!-- Visual Demo -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  See It In Action
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Choose your occasion and get instant color recommendations
                </p>
              </div>
              
              <!-- Demo Preview -->
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span class="font-medium text-gray-900 dark:text-white">Business Meeting</span>
                  <div class="flex space-x-2">
                    <div class="w-6 h-6 bg-blue-900 rounded border-2 border-white shadow"/>
                    <div class="w-6 h-6 bg-white rounded border-2 border-gray-300 shadow"/>
                    <div class="w-6 h-6 bg-red-800 rounded border-2 border-white shadow"/>
                  </div>
                </div>
                
                <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span class="font-medium text-gray-900 dark:text-white">Wedding Guest</span>
                  <div class="flex space-x-2">
                    <div class="w-6 h-6 bg-gray-700 rounded border-2 border-white shadow"/>
                    <div class="w-6 h-6 bg-blue-100 rounded border-2 border-gray-300 shadow"/>
                    <div class="w-6 h-6 bg-blue-600 rounded border-2 border-white shadow"/>
                  </div>
                </div>
                
                <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span class="font-medium text-gray-900 dark:text-white">Evening Event</span>
                  <div class="flex space-x-2">
                    <div class="w-6 h-6 bg-black rounded border-2 border-white shadow"/>
                    <div class="w-6 h-6 bg-white rounded border-2 border-gray-300 shadow"/>
                    <div class="w-6 h-6 bg-gold-500 rounded border-2 border-white shadow"/>
                  </div>
                </div>
              </div>

              <UButton 
                to="/app" 
                color="primary" 
                size="lg" 
                class="w-full mt-6"
              >
                Try It Now
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Style?
          </h2>
          <p class="text-xl mb-8 text-blue-100">
            Join professionals who never second-guess their formal wear choices. 
            Start matching colors with confidence today.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton 
              to="/app" 
              size="xl" 
              class="px-12 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              Start Color Matching
              <UIcon name="i-lucide-arrow-right" class="ml-2" />
            </UButton>
            <UButton 
              to="/examples" 
              variant="outline" 
              size="xl" 
              class="px-12 py-4 text-lg font-semibold border-white text-white hover:bg-white/10"
            >
              See Examples
            </UButton>
          </div>

          <div class="mt-12 text-blue-200 text-sm">
            <p>🔒 Free to use • 🚀 Instant results • 💡 Expert-backed recommendations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-12 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 class="font-semibold mb-2">Quick Start</h4>
              <ul class="space-y-1 text-gray-300">
                <li><NuxtLink to="/app" class="hover:text-white">Color Matcher</NuxtLink></li>
                <li><NuxtLink to="/guide" class="hover:text-white">Style Guide</NuxtLink></li>
                <li><NuxtLink to="/examples" class="hover:text-white">Examples</NuxtLink></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Learn More</h4>
              <ul class="space-y-1 text-gray-300">
                <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
                <li><a href="#" class="hover:text-white">Color Theory</a></li>
                <li><a href="#" class="hover:text-white">Style Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Support</h4>
              <ul class="space-y-1 text-gray-300">
                <li><a href="#" class="hover:text-white">FAQ</a></li>
                <li><a href="#" class="hover:text-white">Contact</a></li>
                <li><a href="#" class="hover:text-white">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta tags
useSeoMeta({
  title: 'SuitColorMatch - Master Your Formal Style with AI Color Coordination',
  ogTitle: 'SuitColorMatch - Master Your Formal Style with AI Color Coordination',
  description: 'Get AI-powered color coordination for formal wear. Perfect suit combinations for business, weddings, and special events. Never second-guess your style choices again.',
  ogDescription: 'Get AI-powered color coordination for formal wear. Perfect suit combinations for business, weddings, and special events. Never second-guess your style choices again.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})


</script> 