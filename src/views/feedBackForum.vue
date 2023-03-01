<template>
    <div class>
        <div class="cont">
            <font>Enter your name : </font> <br>
            <input type="text" class="in"> <br><br>
            <font>Enter your Feedback : </font><br>
            <textarea name="" id="" cols="30" rows="5" class="in"></textarea> <br><br>
            <input class="butt" type="submit" value="Send">
        </div>
        
    </div>
</template>

<script>
export default{
    name:'feedBackForum'
}
</script>

<style scoped>

input,textarea{
    color: white;
    border: 3px solid #ccc;
    width: 80%;
}

.butt{
    width: 20%;
    color: #0f824d;
    background-color: white;
}

font{
    color: white;
    size: 25px;
}
.cont{
    padding: 50px;
}

</style>