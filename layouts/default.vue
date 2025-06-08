<template>
  <UApp>
    <nav class="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-xl font-bold text-primary hover:text-primary-600 transition-colors">
              SuitColorMatch
            </NuxtLink>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-4">
              <UButton to="/" variant="ghost" color="neutral">
                Home
              </UButton>
              <UButton to="/app" variant="ghost" color="neutral">
                Color Matcher
              </UButton>
              <UButton to="/guide" variant="ghost" color="neutral">
                Style Guide
              </UButton>
              <UButton to="/examples" variant="ghost" color="neutral">
                Examples
              </UButton>
              <UButton to="/about" variant="ghost" color="neutral">
                About
              </UButton>
            </div>
          </div>

          <!-- Right side actions -->
          <div class="flex items-center space-x-4">
            <!-- Dark/Light toggle -->
            <ColorModeToggle />
            
            <!-- Mobile menu button -->
            <div class="md:hidden">
              <UButton 
                icon="i-lucide-menu" 
                variant="ghost" 
                color="neutral"
                @click="mobileMenuOpen = !mobileMenuOpen"
              />
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <UButton to="/" variant="ghost" color="neutral" class="w-full justify-start">
              Home
            </UButton>
            <UButton to="/app" variant="ghost" color="neutral" class="w-full justify-start">
              Color Matcher
            </UButton>
            <UButton to="/guide" variant="ghost" color="neutral" class="w-full justify-start">
              Style Guide
            </UButton>
            <UButton to="/examples" variant="ghost" color="neutral" class="w-full justify-start">
              Examples
            </UButton>
            <UButton to="/about" variant="ghost" color="neutral" class="w-full justify-start">
              About
            </UButton>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page content -->
    <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <slot />
    </main>

    <!-- Toast notifications -->
    <UNotifications />
  </UApp>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script> 