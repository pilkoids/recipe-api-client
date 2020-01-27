<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="ingredients" placeholder="Enter ingredients separated by commas"/>
    <button type="button" 
     @click="recipeFetch"
      class="bg-blue text-white px-4 py-3 text-lg font-medium rounded hover:shadow-lg hover:bg-blue-dark outline-none mx-2">
      Click
    </button>

    <ul>
      <li v-bind:key="item" v-for="item in items">
        <a v-bind:href="item.url">{{ item.name }}</a>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    message: String,
    ingredients: String,
    items: {
      type: Array,
      default:()=>{return [{}]}
    },
    count: {
      type: Number,
      default: 0
    },
    vText: String,
  },
  mounted(){
    //this.recipeFetch();
    //const axios = require('axios').default;

    /*axios.get('http://localhost:3000/ping')
        .then( (response)=> {
         // let resp = JSON.stringify(response);
          // handle success
          this.message = response;
        })*/
  },
  methods:{
    event: function() {
      let test = this.test();
      this.message = 'Button Clicked: '+ this.vText + ', ' + this.count++ + ' - ' + test;
    },
    recipeFetch: function(){
      const axios = require('axios').default;
      //http://dummy.restapiexample.com/api/v1/employees
      //http://localhost:3000/ping
      axios.get('http://localhost:3000/getRecipes/' + this.ingredients)
        .then( (response) => {
          let recipeArr = [];
          response.data.apiResponse.map((res) =>{
            recipeArr.push(res.title);
            this.items.push({name: res.title, url: res.sourceUrl});
          });
        });
    }
  },
  computed :{
    recipeData(){
      return this.message;
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  border:solid 1px;
  width:auto;
  max-width:400px;
  margin:0 auto;
  margin-top:30px;
  padding:15px;
}

li {
  display: block;
  margin: 0 10px;
  text-align:left
}
a {
  color: #42b983;
}
input{
  width:400px;
}

</style>
