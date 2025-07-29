import { supabase } from "@/lib/supabaseClient";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { ref } from "vue";

export const useOfficeStore = defineStore('officeStore',()=>{
  const office =ref()
  const isLoading =ref(true)
  const toast = useToast()

  async function fetchAllOffice(){
    try {
      const {data,error} = await supabase.from('office').select('*')
      office.value =data
    } catch (error) {
      toast.error('Error: Can not fetch office store',error)
    } finally{
      isLoading.value=false
    }
  }
  fetchAllOffice()
  return {
    office, 
    isLoading,
    fetchAllOffice
  }
})