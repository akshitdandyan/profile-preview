import './App.css';
import React, {Component} from 'react';
export class App extends Component{
  state={
    profileImg:'https://www.republiccapitalaccess.com/wp-content/uploads/2019/03/blank-profile-picture-973460_960_720-300x300.png'
  }
  imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render(){
    const {profileImg} = this.state;
    return(
      <div className="page">
        <div className="container">
            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
            <div className="label1">
                <label htmlFor="input" className="image-upload1">
                <i className="material-icons">add_photo_alternate</i>
                </label>
            </div>
          <div className="img-holder">
            <img src={ profileImg } alt="" id="img" className="img" />
          </div>
          <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i className="material-icons">add_photo_alternate</i>
            </label>
          </div>
        </div>

        <div className="info">
          <form action="#" className="details">
            <label>UserName</label>
            <input type="text" name="user-name" />

            <label>Email</label>
            <input type="email" name="user-email" />

            <label>Branch</label>
            <input type="text" name="user-branch" />
          </form>
        </div>
      </div>
    )
  }
}
export default App;

