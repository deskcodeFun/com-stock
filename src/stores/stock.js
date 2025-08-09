import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'


export const useStock = defineStore('stock', () => {
  const totalComputer = ref(0)
  const onUseComputer = ref(0)
  const computers = ref()
  const officeComputers = ref()
  const computerDetail = ref()
  
  let isLoading = ref(true)

  // this action is fetch all computer table
  // computers is object contain computer table
  // totalComputer is counting all row in computer table
  async function fetchAllComputer() {
    try {
      const { data, error } = await supabase.from('stock').select('*', { count: 'exact' })
      computers.value = data
      totalComputer.value = data.length
      
    } catch (error) {
      
    } finally {
      isLoading.value = false
    }
  }
  // this action counting computer that user_id not null
  // meaning : this computer is used by user_id

  async function fetchCountUseComputers() {
    const { data, error } = await supabase
      .from('stock')
      .select('user_id', { count: 'exact' })
      .not('user_id', 'is', null)
    if (!error) {
      onUseComputer.value = data.length
    }
    isLoading.value = false
  }
  // this action fetch computer filter by office id
  async function getOfficeComputers(officeID) {
    if (officeID !== undefined && officeID !== '0') {
      try {
        const { data } = await supabase
          .from('stock')
          .select('*,staff(*)')
          .eq('office_id', officeID)
          .order('asset_tag', { nullsFirst: false })
        officeComputers.value = data
      } catch (error) {
        console.log('Fect data error:', error)
      } finally {
        isLoading.value = false
      }
    } else {
      try {
        const { data } = await supabase
          .from('stock')
          .select('*,staff(*)')
          .order('user_id', { nullsFirst: true })
        officeComputers.value = data
      } catch (error) {
        console.log('Fect data error:', error)
      } finally {
        isLoading.value = false
      }
    }
  }
  async function getComputerDetail(paramId) {
    let computerId = paramId
    if (computerId !== undefined) {
      try {
        // const { data } = await supabase.from('stock').select('*,staff(*)').eq('id', computerId)
        const { data } = await supabase
          .from('stock')
          .select(`*, staff(*, ...office!inner(*))`)
          .eq('id', computerId)
        computerDetail.value = data
      } catch (error) {
        console.error('Fetch Computer Detail error:', error)
      }
    }
    isLoading.value = false
  }

  fetchAllComputer() 
  fetchCountUseComputers()
  getOfficeComputers()
  getComputerDetail()

  return {
    totalComputer,
    onUseComputer,
    computers,
    officeComputers,
    isLoading,
    computerDetail,
    fetchAllComputer,
    getOfficeComputers,
    fetchCountUseComputers,
    getComputerDetail,
    getOfficeComputers,
  }
})
