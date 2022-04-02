<template>
<div>
    <div class="page">
        <h4>Thêm liên hệ Liên hệ</h4>
        <ContactFrom
            :contact="contact"
            @submit:contact = "addContact"
        />
        
    </div>
</div>
</template>

<script>
import ContactService from "@/services/contact.service";
import ContactFrom from "@/components/ContactForm.vue"


export default {
    components: {
        ContactFrom,
    },


    data(){
        return {
            contact: {},
            message: "",
        };
    },

    methods: {

        async addContact(data){
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được thêm thành công.";
                console.log(this.message)
                
            }
            catch(error) {
                console.log(error);
            }
            
        },

        

    },
};
</script>

<style scoped>
</style>