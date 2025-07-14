import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from 'vue-toastification'

export const useComputerCountStore = defineStore('computerCount', () => {
  const totalComputer = ref(0)
  const onUseComputer = ref(0)
  const computers = ref()
  const officeComputers = ref()
  const computerDetail = ref()
  const toast = useToast()
  let isLoading = ref(true)

  // this action is fetch all computer table
  // computers is object contain computer table
  // totalComputer is counting all row in computer table
  async function fetchAllComputer() {
    const { data, error } = await supabase.from('computer').select('*', { count: 'exact' })
    toast.success('Fetch all Computer Success', {
      timeout: 2000,
    })
    if (!error) {
      computers.value = data
      totalComputer.value = data.length
    }
  }
  // this action counting computer that user_id not null
  // meaning : this computer is used by user_id
  async function fetchCountUseComputers() {
    const { data, error } = await supabase
      .from('computer')
      .select('user_id', { count: 'exact' })
      .not('user_id', 'is', null)
    if (!error) {
      onUseComputer.value = data.length
    }
  }
  // this action fetch computer filter by office id
  async function getOfficeComputers(officeID) {
    if (officeID !== undefined && officeID !== '0') {
      try {
        const { data } = await supabase
          .from('computer')
          .select('*,staff(*)')
          .eq('office_id', officeID)
          .order('user_id', { nullsFirst: false })
        officeComputers.value = data
      } catch (error) {
        console.log('Fect data error:', error)
      } finally {
        isLoading.value = false
      }
    } else {
      try {
        const { data } = await supabase
          .from('computer')
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
    try {
      // const { data } = await supabase.from('computer').select('*,staff(*)').eq('id', computerId)
      const { data } = await supabase
        .from('computer')
        .select(`*, staff(*, ...office!inner(*))`)
        .eq('id', computerId)

      computerDetail.value = data
    } catch (error) {
      console.error('Fetch detail error:', error)
    }
  }

  fetchAllComputer()
  fetchCountUseComputers()
  getOfficeComputers()

  // getComputerDetail()

  return {
    totalComputer,
    onUseComputer,
    computers,
    officeComputers,
    isLoading,
    computerDetail,
    getOfficeComputers,
    getComputerDetail,
  }
})
