import { defineStore } from 'pinia'
import { useColorTheory } from '~/composables/useColorTheory'

export const useOccasionStore = defineStore('occasion', {
  state: () => ({
    selectedOccasion: null,
    occasionHistory: [],
    isLoading: false
  }),

  getters: {
    /**
     * Get the currently selected occasion
     */
    currentOccasion: (state) => state.selectedOccasion,

    /**
     * Check if an occasion is currently selected
     */
    hasSelectedOccasion: (state) => state.selectedOccasion !== null,

    /**
     * Get the selected occasion's ID
     */
    selectedOccasionId: (state) => state.selectedOccasion?.id || null,

    /**
     * Get the selected occasion's title
     */
    selectedOccasionTitle: (state) => state.selectedOccasion?.title || '',

    /**
     * Get the selected occasion's formality level
     */
    selectedOccasionFormality: (state) => state.selectedOccasion?.formalityLevel || 0,

    /**
     * Get selection history
     */
    getSelectionHistory: (state) => state.occasionHistory,

    /**
     * Check if loading state is active
     */
    isLoadingState: (state) => state.isLoading,

    /**
     * Get filtered colors for the selected occasion
     */
    availableColors: (state) => {
      if (!state.selectedOccasion) return []
      
      const { getColorsByOccasion } = useColorTheory()
      
      // Map our occasion IDs to the data file format
      const occasionMap = {
        'business-professional': 'business_professional',
        'creative-professional': 'creative_professional', 
        'formal-evening': 'formal_evening',
        'social-casual': 'social_casual'
      }
      
      const dataOccasionId = occasionMap[state.selectedOccasion.id]
      return getColorsByOccasion(dataOccasionId)
    },

    /**
     * Get recommended color themes for the selected occasion
     */
    recommendedColorThemes: (state) => {
      return state.selectedOccasion?.colorThemes || []
    }
  },

  actions: {
    /**
     * Select an occasion and store it in state
     * @param {Object} occasion - The occasion object to select
     */
    selectOccasion(occasion) {
      if (!occasion || !occasion.id) {
        console.warn('Invalid occasion provided to selectOccasion')
        return
      }

      this.selectedOccasion = { ...occasion }
      
      // Add to history if it's not the same as the last selection
      if (this.occasionHistory.length === 0 || 
          this.occasionHistory[this.occasionHistory.length - 1].id !== occasion.id) {
        this.occasionHistory.push({
          ...occasion,
          selectedAt: new Date().toISOString()
        })
      }
    },

    /**
     * Clear the selected occasion
     */
    clearSelection() {
      this.selectedOccasion = null
    },

    /**
     * Reset the entire store state
     */
    resetStore() {
      this.selectedOccasion = null
      this.occasionHistory = []
      this.isLoading = false
    },

    /**
     * Set loading state
     * @param {boolean} loading - Whether the store is in a loading state
     */
    setLoading(loading) {
      this.isLoading = loading
    },

    /**
     * Clear selection history
     */
    clearHistory() {
      this.occasionHistory = []
    },

    /**
     * Get occasion data by ID (useful for navigation/restoration)
     * @param {string} occasionId - The ID of the occasion to find
     */
    getOccasionById(occasionId) {
      return this.occasionHistory.find(occasion => occasion.id === occasionId) || null
    },

    /**
     * Check if a specific occasion is currently selected
     * @param {string} occasionId - The ID of the occasion to check
     */
    isOccasionSelected(occasionId) {
      return this.selectedOccasion?.id === occasionId
    }
  }
}) 