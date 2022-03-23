<template>
    <div class="row">
        <div class="pt-2 col-12">
            <strong>Tên:</strong>
            {{ contact.name }}
        </div>
        <div class="pt-2 col-12">
            <strong>E-mail:</strong>
            {{ contact.email }}
        </div>
        <div class="pt-2 col-12">
            <strong>Địa chỉ:</strong>
            {{ contact.address }}
        </div>
        <div class="pt-2 col-12">
            <strong>Điện thoại:</strong>
            {{ contact.phone }}
        </div>
        <div class="pt-2 col-12">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};
</script>