import { supabase } from '@/lib/supabaseClient'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOfficeStore = defineStore('officeStore', () => {
  const office = ref()
  const isLoading = ref(true)

  async function fetchAllOffice() {
    try {
      const { data, error } = await supabase.from('office').select('*')
      office.value = data
    } catch (error) {
    } finally {
      isLoading.value = false
    }
  }
  fetchAllOffice()
  return {
    office,
    isLoading,
    fetchAllOffice,
  }
})
