import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal'
import IdeaForm from './components/IdeaForm';
import './css/style.css';
import IdeaList from './components/IdeaList';

// import as a component 
const modal = new Modal()
const ideaForm = new IdeaForm()
ideaForm.render()
const ideaList = new IdeaList()
ideaList.render()

