export default{
    name:'searchIp',

    data(){
        return{
            ip: 'ここにIPが表示される。'
        }
    },

    methods: {
        getIp(){
            this.ip = 'IPを取得しています。';
            
            this.$axios.get('https://httpbin.org/get')
                .then((response) => {
                    this.ip = response.data.origin;
                })
                .catch((reason) =>{
                    this.ip = 'IPの取得に失敗';
                });
        }
    }
}