<template>
  <div class="relative h-full">
    <!-- Selection Indicator -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-0 rotate-180"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-0 rotate-180"
    >
      <div 
        v-if="isSelected" 
        class="absolute top-1.1 right-1 z-50"
      >
        <UBadge color="primary" variant="solid" size="sm" class="shadow-sm">
          <UIcon name="i-heroicons-check" class="w-3 h-3" />
          Selected
        </UBadge>
      </div>
    </Transition>

    <UCard
      :class="[
        'cursor-pointer transition-all duration-300 transform group relative h-full',
        isSelected 
          ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-950/20 scale-105' 
          : 'hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-200/50 dark:hover:shadow-primary-900/30 hover:ring-1 hover:ring-primary-300 dark:hover:ring-primary-700'
      ]"
      @click="$emit('select', occasion)"
    >

    <!-- Card Content -->
    <template #header>
      <div class="text-center">
        <div class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
          {{ occasion.icon }}
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {{ occasion.title }}
        </h3>
      </div>
    </template>

    <div class="text-center space-y-4 flex flex-col justify-between h-full">
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {{ occasion.description }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap justify-center gap-1">
        <UBadge
          v-for="tag in occasion.tags"
          :key="tag"
          color="gray"
          variant="soft"
          size="xs"
          :class="'transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40'"
        >
          {{ tag }}
        </UBadge>
      </div>

      <!-- Formality Level Indicator -->
      <div class="pt-2">
        <div class="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
          <span>Formality:</span>
          <div class="flex gap-1">
            <div
              v-for="i in 10"
              :key="i"
              :class="[
                'w-2 h-2 rounded-full transition-all duration-300',
                'group-hover:scale-110',
                i <= occasion.formalityLevel 
                  ? 'bg-primary-500 group-hover:bg-primary-400' 
                  : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600'
              ]"
              :style="{ transitionDelay: `${i * 20}ms` }"
            />
          </div>
          <span class="font-medium">{{ occasion.formalityLevel }}/10</span>
        </div>
      </div>
          </div>
    </UCard>
  </div>
</template>

<script setup>
defineProps({
  occasion: {
    type: Object,
    required: true,
    validator: (occasion) => {
      return occasion && 
        typeof occasion.id === 'string' &&
        typeof occasion.title === 'string' &&
        typeof occasion.description === 'string' &&
        typeof occasion.icon === 'string' &&
        Array.isArray(occasion.tags) &&
        typeof occasion.formalityLevel === 'number'
    }
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select'])
</script> 