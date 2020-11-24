import Swal from 'sweetalert2'

const detail = (event, id, title, description, image_url) => {
    event.preventDefault()
    Swal.fire({
      title: id + '. ' + title,
      text: description,
      imageUrl: image_url,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      showConfirmButton: false
    })
  }

  export default detail