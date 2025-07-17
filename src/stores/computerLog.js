import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from 'vue-toastification'

export const useComputerLogStore = defineStore('computerLog', () => {
  const toast = useToast()
  const computerLog = ref()
  const getState1 = ref()
  const getState2 = ref()
  const getState3 = ref()

  async function fetchComputerLog() {
    try {
      const { data, error } = await supabase
        .from('computer_update')
        .select('*,...computer!inner( asset_tag,user_id )')
      toast.success('Fetch all Computer Success', {
        timeout: 2000,
      })
      computerLog.value = data
      console.log('computerUpdate in store:', computerLog)
    } catch (error) {
      console.error('Fetch Computer Log error:', error)
    }
  }

  fetchComputerLog()

  return {
    computerLog,

    fetchComputerLog,
  }
})
