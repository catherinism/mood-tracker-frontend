// import React, { Component } from 'react'

// export default class MoodsContainers extends Component {
//     state = {
//         moods: []
//     }
//     componentDidMount() {
//         fetch('http://localhost:3000/api/v1/moods')
//             .then(res => {
//                 console.log(res)
//                 return res.json()
//             })
//             .then(moods => this.setState({ moods }))
//     }
//     render() {
//         if (this.state.moods.length === 0) {
//             return <h1>Loading...</h1>
//         }
//         return (
//             <div>
//                 <ul>
//                     {this.state.moods.map(mood => (
//                     <div>
//                         <p> Feeling: {mood.feeling}</p>
//                         </div>
//                          ))}
//                            </ul>
//                            </div>
//                            )
//                          }
//                         }
