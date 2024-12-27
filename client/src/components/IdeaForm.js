import Ideas from "../../../models/Ideas"
import IdeasApi from "../services/ideasApi"
import IdeaList from "./IdeaList"
export default class IdeaForm {
    constructor() {
       this._formModal = document.querySelector('#form-modal') 
       this._IdeaList = new IdeaList()
    }

    addEventListener() {
      this._form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e) {
      e.preventDefault()

      const idea = {
        // get the value by touch the form's elements's value this case is "text"
        text: this._form.elements.text.value,
        tag: this._form.elements.tag.value,
        username: this._form.elements.username.value
      }

      // add to the server
      const res = await IdeasApi.addIdeas(idea)
      // add to the dom
      this._IdeaList.getIdeas()
      
      document.dispatchEvent(new Event('addNewIdea'))
      

      // clear fields
      this._form.elements.text.value = ''
      this._form.elements.tag.value = ''
      this._form.elements.username.value = ''

      // dispatch a new Event on the document to listen
      document.dispatchEvent(new Event('closeModal')) // this is amazing to let components interact each other
    }


    render() {
        this._formModal.innerHTML = `
            <form id="idea-form">
            <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
            </form>
        `
       this._form = document.querySelector('#idea-form')
       this.addEventListener()
    }
}