import axios from 'axios'
import React from 'react'
import {View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Header, Icon } from 'react-native-elements'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
            movdetail : {}
        }
    }

    getmov = () => {
        const url = "http://127.0.0.1:5000/getmovie"
        axios.get(url).then(response=>{
            let details = response.data.data
            this.setState({
                movdetail : details
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    likemov = () => {
        const url = "http://127.0.0.1:5000/likemovie"
        axios.post(url).then(response=>{
            this.getmov()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    dislike = () => {
        const url = "http://127.0.0.1:5000/dislikemovie"
        axios.post(url).then(response=>{
            this.getmov()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    notwatched = () => {
        const url = "http://127.0.0.1:5000/notwatched"
        axios.post(url).then(response=>{
            this.getmov()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    componentDidMount(){
        this.getmov()
    }


    render(){
        const {movdetail} = this.state
        if (movdetail.movie_poster){
            const {movie_poster,original_title,overview,release_date,runtime,vote_count} = movdetail
        }
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header centerComponent={{text:"movie recomended",style:styles.headerTitle}}
                            rightComponent={{icon:"search",color:"blue"}} 
                            backgroundColor="red" 
                            containerStyle={{flex:1}}/>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.subContainer}>
                        <Image style={styles.posterImage} source={{uri:movie_poster}}/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { flex: 1 },
    headerContainer: { 
        flex: 0.1
    },
    headerTitle: { 
         color: "#fff",
          fontWeight: "bold",
           fontSize: RFValue(18) 
    },
    subContainer: { 
         flex: 0.9
    }, 
    subTopContainer: { 
        flex: 0.4,
        justifyContent: "center",
         alignItems: "center" 
    },
    posterImage: { 
        width: "60%", 
        height: "90%", 
        resizeMode: "stretch", 
        borderRadius: RFValue(30), 
        marginHorizontal: RFValue(10) 
    }, 
    subBottomContainer: { 
        flex: 0.6
    },
    upperBottomContainer: { 
        flex: 0.2,
        alignItems: "center" 
    }, 
    title: { 
        fontSize: RFValue(20), 
        fontWeight: "bold", 
        textAlign: "center" 
    }, 
    subtitle: { 
        fontSize: RFValue(14), 
        fontWeight: "300" 
    }, 
    middleBottomContainer: { 
        flex: 0.35
    }, 
    overview: { 
        fontSize: RFValue(13), 
        textAlign: "center", 
        fontWeight: "300", 
        color: "gray" 
    }, 
    lowerBottomContainer: { 
        flex: 0.45
    }, 
    iconButtonContainer: { 
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center" 
    }, buttonCotainer: { 
        justifyContent: "center", 
        alignItems: "center"
    }, button: { 
        width: RFValue(160), 
        height: RFValue(50), 
        borderRadius: RFValue(20), 
        justifyContent: "center", 
        alignItems: "center", 
        borderWidth: 1, 
        marginTop: RFValue(15) 
    }, 
    buttonText: { 
        fontSize: RFValue(15), 
        fontWeight: "bold" 
    } 
});