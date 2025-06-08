<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <UContainer class="py-12">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your Occasion
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Select the type of event to get personalized suit color recommendations
        </p>
      </div>

      <!-- Occasion Selection Grid -->
      <TransitionGroup
        name="occasion-grid"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        appear
      >
        <OccasionCard
          v-for="(occasion, index) in occasions"
          :key="occasion.id"
          :occasion="occasion"
          :is-selected="isOccasionSelected(occasion.id)"
          :style="{ '--delay': `${index * 150}ms` }"
          class="occasion-card-enter"
          @select="selectOccasion"
        />
      </TransitionGroup>

      <!-- Selected Occasion Display -->
      <Transition
        enter-active-class="selected-display-enter-active"
        enter-from-class="selected-display-enter-from"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="occasionStore.hasSelectedOccasion" class="text-center space-y-6">
          <UAlert
            color="primary"
            variant="soft"
            :title="`${occasionStore.selectedOccasionTitle} Selected`"
            :description="`Formality level: ${occasionStore.selectedOccasionFormality}/10`"
            icon="i-heroicons-check-circle"
            class="transform transition-all duration-300 hover:scale-105"
          />

          <!-- Available Colors Preview -->
          <div v-if="occasionStore.availableColors.length > 0" class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Available Colors for {{ occasionStore.selectedOccasionTitle }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <div
                v-for="color in occasionStore.availableColors.slice(0, 6)"
                :key="color.id"
                class="group flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div
                  :style="{ backgroundColor: color.hex }"
                  class="w-12 h-12 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-gray-200 dark:ring-gray-600"
                />
                <span class="text-xs font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
                  {{ color.name }}
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Formality: {{ color.formality }}/10
                </span>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
              {{ occasionStore.availableColors.length }} total colors available for this occasion
            </p>
          </div>
          
          <div class="mt-6">
            <UButton
              color="primary"
              size="lg"
              icon="i-heroicons-arrow-right"
              trailing
              class="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              @click="proceedToNext"
            >
              Continue to Color Selection
            </UButton>
          </div>
        </div>
      </Transition>

      <!-- Help Text -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-to-class="opacity-0"
      >
        <div v-if="!occasionStore.hasSelectedOccasion" class="text-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Select an occasion above to continue with your suit color matching journey
          </p>
        </div>
      </Transition>
    </UContainer>
  </div>
</template>

<script setup>
// Import Pinia store and composables
import { useOccasionStore } from '~/stores/occasion'
import { useOccasions } from '~/composables/useOccasions'

// Define page metadata
definePageMeta({
  name: 'Occasion Selection',
  description: 'Choose your occasion for personalized suit color recommendations',
  layout: 'app'
})

// Set page head
useHead({
  title: 'Choose Your Occasion - Suit Color Match',
  meta: [
    {
      name: 'description',
      content: 'Select your occasion type to get personalized suit color recommendations tailored to your event.'
    }
  ]
})

// Initialize composables and stores
const occasionStore = useOccasionStore()
const { occasions } = useOccasions()

// Methods using the Pinia store
const selectOccasion = (occasion) => {
  if (occasion) {
    occasionStore.selectOccasion(occasion)
    console.log('Selected occasion:', occasion.title)
  }
}

const proceedToNext = () => {
  // TODO: Navigate to next step (will be implemented in future tasks)
  console.log('Proceeding to color selection with:', occasionStore.currentOccasion)
}

// Computed properties for reactive state
const isOccasionSelected = (occasionId) => occasionStore.isOccasionSelected(occasionId)
</script>

<style scoped>
/* Grid transition animations */
.occasion-grid-enter-active {
  transition: all 0.6s ease-out;
  transition-delay: var(--delay, 0ms);
}

.occasion-grid-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.occasion-grid-leave-active {
  transition: all 0.4s ease-in;
}

.occasion-grid-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

/* Initial card animation on page load */
.occasion-card-enter {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay, 0ms);
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhance the selected occasion display transition */
.selected-display-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 0.2s;
}

.selected-display-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style> 