import React, {Component, Fragment} from 'react'

class App extends Component{
    constructor(){
        super(props)
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        fetch("url").then((response)=>{
            this.setState({data:response})
        }).catch(()=>{

        })
    }

    render(){
        return(
            <Fragment>
                {this.state.data.statusCode =='200'?
                <div>
                    
                </div>
                :
                <div>Error</div>
                }
            </Fragment>
        )
    }
}

public class Singleton{

    private static Singleton intance; 

    private Singleton(){ }

    public static getInstance(){
        if(this.intance == null){
            return new Singleton()
        }else{
            return this.intance
        }
    }
}