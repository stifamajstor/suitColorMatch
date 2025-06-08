<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About SuitColorMatch
      </h1>
      
      <div class="prose prose-lg dark:prose-invert">
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          SuitColorMatch is your personal styling assistant for creating perfect 
          color combinations with your suits and formal wear.
        </p>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
          <h2 class="text-xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-600 dark:text-gray-300">
            We believe that everyone deserves to look their best. Our goal is to 
            make professional styling accessible to everyone, regardless of their 
            fashion background.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <UCard class="p-6">
            <h3 class="text-lg font-semibold mb-3">Expert Guidance</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Professional styling tips and color theory principles.
            </p>
          </UCard>
          
          <UCard class="p-6">
            <h3 class="text-lg font-semibold mb-3">Easy to Use</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Simple interface designed for quick decision making.
            </p>
          </UCard>
        </div>
        
        <div class="mt-8 text-center">
          <UButton to="/" color="primary">
            Back to Home
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template> 