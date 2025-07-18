import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from 'vue-toastification'

export const useComputerLogStore = defineStore('computerLog', () => {
  const toast = useToast()
  const computerLog = ref()
  let isLoading = ref(true)

  async function fetchComputerLog() {
    try {
      const { data, error } = await supabase
        .from('computer_update')
        .select('*,...computer!inner( asset_tag,user_id )')
        .order('id')
      toast.success('Fetch Computer_UPDATE Success', {
        timeout: 2000,
      })
      computerLog.value = data
      console.log('computerLog in store:', computerLog)
    } catch (error) {
      console.error('Fetch Computer Log error:', error)
    } finally {
      isLoading = false
    }
  }
  async function updateComputerLog(list, itemID) {
    try {
      const { data, error } = await supabase
        .from('computer_update')
        .update({ state: list })
        .eq('id', itemID)
      // computerLog.value = data
    } catch (error) {
      console.error('UPDATE Computer Log error:', error)
    } finally {
      isLoading = false
    }
  }
  fetchComputerLog()
  updateComputerLog()
  return {
    computerLog,

    fetchComputerLog,
    updateComputerLog,
  }
})
