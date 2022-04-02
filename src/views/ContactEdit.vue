<template>
<div>
    <div v-if="contact" class="page">
        <h4>Hiệu chỉnh Liên hệ</h4>
        <ContactFrom
            :contact="contact"
            @submit:contact = "updateContact"
            @delete:contact = "deleteContact"
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

    props: {
        id: {type: String, require: true},
    },

    data(){
        return {
            contact: null,
            message: "",
        };
    },

    methods: {
        async getContact(id) {
            try {
                this.contact = await ContactService.get(id);
            }
            catch(error) {
                console.log(error);
                //chuyển sang trang Notfound đồng thời giữ cho URl không thay đổi
                this.$router.push({
                    name : "NotFound",
                    params: {
                        pathMatch: this.$router.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.route.hash,
                });
            }
        },

        async updateContact(data){
            try {
                await ContactService.update(this.contact.id, data);
                this.message = "Liên hệ được cập nhật thành công.";
                console.log(this.message)
                
            }
            catch(error) {
                console.log(error);
            }
            
        },

        async deleteContact() {
            if(confirm("Bạn muốn xóa liên hệ này?")) {
                try {
                    await ContactService.delete(this.contact.id);
                    this.$router.push({ name: "ContactBook"});
                }
                catch(error) {
                    console.log(error)
                }
            }
        },

    },
    created(){
        this.getContact(this.id);
        this.message = "";
    },
};
</script>

<style scoped>
</style>