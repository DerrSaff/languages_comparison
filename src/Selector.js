import React, {Component} from 'react'


export default class Selector extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this
      .handleChange
      .bind(this);
  }
  handleChange(event) {
    if (event.target.checked) {
      for (let el of document.querySelectorAll('.' + event.target.value)) el.style.display = 'table-cell'
    }
    else {
      for (let el of document.querySelectorAll('.' + event.target.value)) el.style.display = 'none'
    }

    if (document.querySelector('input[type="checkbox"]:checked')) {
      for (let el of document.querySelectorAll('.no-language-selected')) el.style.display = 'none'
    }
    else {
      for (let el of document.querySelectorAll('.no-language-selected')) el.style.display = 'table-cell'
    }
  }
  render() {
    const languages = ['russian', 'polish', 'english', 'german', 'spanish', 'french', 'italian']
    console.log()
    return (
      <div className="selector">
        <h2>Добавить язык к сравнению</h2>

        <div className="languages box">
          {languages.map( (item, index) => (
            <label key={index}>
              <input type="checkbox" value={languages[index]} onChange={this.handleChange}/>
              {languages[index]}
            </label>
          ))}
        </div>
      </div>
    )
  }
}