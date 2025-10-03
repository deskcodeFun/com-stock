import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'

export const useServiceLog = defineStore('service_log', () => {
  const serviceLog = ref()
  const serviceDetail = ref()
  let isLoading = ref(true)

  async function fetchService() {
    try {
      const { data, error } = await supabase.from('service_log').select(`*, computer(*, ...staff!inner(*))`)
      
      serviceLog.value = data
      if (error) throw error
      // console.log('service in store :', serviceLog)
    } catch (error) {
      console.error('Fetch Service Store error:', error)
    } finally {
      isLoading = false
    }
  }
  async function getServiceDetail(paramId) {
    if (paramId !== undefined) {
      try {
        const { data, error } = await supabase
          .from('service_log')
          .select('*')
          .eq('computer_id', paramId)        
        serviceDetail.value = data
        if (error) throw error
      } catch (error) {
        console.error('Fetch service detail error:', error)
      } finally {
        isLoading = false
      }
    } else {
      console.log('parmaID is undefined')
      isLoading = false
    }
  }
  async function updateServiceState(list, itemID) {
    try {
      const { error } = await supabase
        .from('service_log')
        .update({ state: list })
        .eq('id', itemID)
      if (error) throw error

    } catch (error) {
      console.error('UPDATE Service Log error:', error)
    } finally {
      isLoading = false
    }
  }
  fetchService()
  updateServiceState()
    getServiceDetail()
  return {
    serviceLog,
    serviceDetail,
    fetchService,
    getServiceDetail,
    updateServiceState,
  }
})
