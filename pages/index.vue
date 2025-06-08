<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to SuitColorMatch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Find the perfect color combinations for your suits
        </p>
        
        <div class="flex gap-4 justify-center">
          <UButton color="primary" size="lg">
            Get Started
          </UButton>
          <UButton color="secondary" variant="outline" size="lg">
            Learn More
          </UButton>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <UCard class="p-6">
          <div class="text-center">
            <div class="text-primary text-3xl mb-4">🎨</div>
            <h3 class="text-lg font-semibold mb-2">Color Matching</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Perfect color combinations for any occasion
            </p>
          </div>
        </UCard>

        <UCard class="p-6">
          <div class="text-center">
            <div class="text-primary text-3xl mb-4">👔</div>
            <h3 class="text-lg font-semibold mb-2">Style Guide</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Professional styling recommendations
            </p>
          </div>
        </UCard>

        <UCard class="p-6">
          <div class="text-center">
            <div class="text-primary text-3xl mb-4">✨</div>
            <h3 class="text-lg font-semibold mb-2">Personal Touch</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Tailored suggestions for your style
            </p>
          </div>
        </UCard>
      </div>

      <!-- Demo Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold mb-6 text-center">Try the Dark Mode Toggle</h2>
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Click the sun/moon icon in the navbar to switch between light and dark themes.
          </p>
          <div class="flex justify-center space-x-4">
            <UBadge color="primary" variant="soft">Light Mode</UBadge>
            <UBadge color="primary" variant="soft">Dark Mode</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 