document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.item-workflow__button').forEach(function(itemWorkflowButton) {
    itemWorkflowButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.workflow__slider').forEach(function(workflowSlider) {
        workflowSlider.classList.remove('workflow__slider--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('workflow__slider--active')
    })
  })
})
