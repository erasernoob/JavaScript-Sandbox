import IdeasApi from "../services/ideasApi";
export default class IdeaList {
    constructor() {
        this._ideaListEl = document.querySelector('#idea-list')
        this._ideaDeleteBtn = document.querySelector('delete')

        document.addEventListener('addNewIdea', this.getIdeas)

        // this._ideaDeleteBtn.addEventListener('click', IdeasApi.deleteIdeas)

        this._ideas = [];
        this._validTags = new Set()
        this._validTags.add('technology')
        this._validTags.add('software')
        this._validTags.add('inventions')
        this._validTags.add('education')
        this._validTags.add('health')

        this.getIdeas()
    }

    async deleteIdea(ideaId) {
        try {
            // delete from server
            const res = await IdeasApi.deleteIdeas(ideaId)
            // delete from client
            // this._ideas.filter((idea))
            this.getIdeas()
            

        } catch (error) {
            
        }

    }

    addEventListener() {
        this._ideaListEl.addEventListener('click', (e) => {
            if(e.target.classList.contains('fa-times')) {
                // what dose this >?
                e.stopImmediatePropagation()
                const ideaId = e.target.parentElement.parentElement.dataset.id
                this.deleteIdea(ideaId)
            }
        })
    }

    async getIdeas() {
        try {
            const response = await IdeasApi.getIdeas()
            this._ideas = response.data.data

        } catch (error) {
            console.log(error)
        }
        this.render()
    }

    getTagClass(tag) {
        if (!tag) return ''
        tag = tag.toLowerCase()
        let tagClass = ''
        if (this._validTags.has(tag)) {
            tagClass = `tag-${tag}`
            return tagClass
        } else {
            return ''
        }
    }


    render() {
        this._ideaListEl.innerHTML = this._ideas.map((idea) => {
            const tag = this.getTagClass(idea.tag)
            return `
              <div class="card" data-id=${idea._id} >
                <button class="delete"><i class="fas fa-times"></i></button>
            <h3>${idea.text}</h3>
          <p class="tag ${tag}">${idea.tag}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
            </div>
            `
        }).join('')
        this.addEventListener()
    }
}
