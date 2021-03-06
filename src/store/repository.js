import axios from "axios";

const repository = {
    namespaced: true,

    
    state: {
        repos: [],
        url:  'https://api.github.com/user/repos',
        urlPersonalInfos: 'https://api.github.com/users/Antho-Lopez',
      },
    
      getters:{

      },
    
      mutations:{

        getRepos(state, repos){
            state.repos = repos; 
        }

      },
    
      actions:{

        async getRepos(context) {
            axios.defaults.headers.common = {
              "Authorization": "Token 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",
            };
            const response = await axios.get(context.state.url);
            console.log(response);
            context.commit('getRepos', response.data);
  
          },
  
      },
     
}

export default repository;