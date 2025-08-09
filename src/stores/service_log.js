import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'


export const useServiceLog = defineStore('service_log', () => {
  const serviceLog  = ref()
  const serviceDetail = ref()
  let isLoading = ref(true)

  async function fetchService() {
    try {
      const { data } = await supabase
        .from('service_log')
        .select(`*, stock(*, ...staff!inner(*))`)
        toast.success('Fetch Computer_UPDATE Success', {
          timeout: 1000,
      })
      // const { data } = await supabase
      //   .from('serviceLog')
      //   .select(`*, computer(*, ...staff!inner(*))`)
      //   toast.success('Fetch Computer_UPDATE Success', {
      //     timeout: 1000,
      // })
      serviceLog.value = data
      // console.log('service in store :', serviceLog)
     
    } catch (error) {
      console.error('Fetch Service Store error:', error)
    } finally {
      isLoading = false
    }
  }
  async function getServiceDetail(paramId) {
    
    if (paramId !== '') {
      try {
        const { data, error } = await supabase
          .from('service_log')
          .select('*')
          .eq('computer_id', paramId)
        serviceDetail.value = data
        // console.log('Servie detail :', serviceDetail)
        // console.log('param id: ',paramId)
        
      } catch (error) {
        console.error('Fetch service detail error:', error)
      } finally {
        isLoading = false
      }
    } else {
      console.log('parmaID is undefined')
    }
    isLoading = false
  }
  async function updateServiceState(list, itemID) {
    try {
      const { data, error } = await supabase
        .from('service_log')
        .update({ state: list })
        .eq('id', itemID)
    } catch (error) {
      console.error('UPDATE Service Log error:', error)
    } finally {
      isLoading = false
    }
  }
  fetchService()
  updateServiceState()
  //  getServiceDetail()
  return {
    serviceLog,
    serviceDetail,

    fetchService,
    getServiceDetail,
    updateServiceState,
  }
})
