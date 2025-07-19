import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from 'vue-toastification'

export const useComputerLogStore = defineStore('computerLog', () => {
  const toast = useToast()
  const computerLog = ref()
  const computerLogDetail = ref()

  let isLoading = ref(true)

  async function fetchComputerLog() {
    try {
      const { data } = await supabase
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
  async function getComputerLog(paramId) {
    if (paramId !== '') {
      try {
        const { data, error } = await supabase
          .from('computer_update')
          .select('*')
          .eq('computer_id', paramId)
        toast.success('Fetch getComputerLog Success', {
          timeout: 2000,
        })
        computerLogDetail.value = data

        console.log('computerLogDetail in store', computerLogDetail)
      } catch (error) {
        console.error('Fetch Computer Log error:', error)
      } finally {
        isLoading = false
      }
    } else {
      console.log('parmaID is undefined')
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
  // getComputerLog()
  return {
    computerLog,
    computerLogDetail,

    fetchComputerLog,
    getComputerLog,
    updateComputerLog,
  }
})
