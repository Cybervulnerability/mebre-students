document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('multi-step-form');
  const steps = form.querySelectorAll('.step');
  const confirmationSummary = document.getElementById('confirmation-summary');
  const totalPrice = document.getElementById('total-price');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
  });

  form.addEventListener('click', function (e) {
    if (e.target.classList.contains('next-btn') || e.target.classList.contains('prev-btn')) {
      const currentStep = e.target.closest('.step');
      const currentStepNumber = parseInt(currentStep.getAttribute('data-step'));

      if (e.target.classList.contains('next-btn')) {
        if (validateStep(currentStepNumber)) {
          showStep(currentStepNumber + 1);
        }
      } else if (e.target.classList.contains('prev-btn')) {
        showStep(currentStepNumber - 1);
      }
    }
  });

  // Fonksiyon: Bir sonraki veya bir önceki adıma geçiş
  function showStep(stepNumber) {
    steps.forEach(step => {
      step.style.display = 'none';
    });

    const nextStep = form.querySelector(`[data-step="${stepNumber}"]`);
    if (nextStep) {
      nextStep.style.display = 'block';
    }

    updateConfirmationSummary();
  }

  // Fonksiyon: Geçerli adımı doğrula
  function validateStep(stepNumber) {
    if (stepNumber === 2) {
      const selectedPlan = form.querySelector('.plan-option.selected');
      const billingOption = form.querySelector('input[name="billing"]:checked');

      if (!selectedPlan) {
        alert('Please select a plan.');
        return false;
      }

      if (!billingOption) {
        alert('Please select billing option.');
        return false;
      }
    }

    return true;
  }

  // Fonksiyon: Seçilen planı ve ek özellikleri güncelle
  function updateConfirmationSummary() {
    const selectedPlan = form.querySelector('.plan-option.selected');
    const billingOption = form.querySelector('input[name="billing"]:checked');
    const addons = form.querySelectorAll('.addon-option input:checked');

    // Planı güncelle
    confirmationSummary.innerHTML = 'Selected Plan: ' + (selectedPlan ? selectedPlan.getAttribute('data-plan') : '');

    // Fiyatı güncelle
    let total = 0;
    if (selectedPlan) {
      total += parseFloat(selectedPlan.getAttribute('data-price'));
    }
    if (billingOption) {
      total *= billingOption.value === 'monthly' ? 1 : 12;
    }
    addons.forEach(addon => {
      total += parseFloat(addon.getAttribute('data-price'));
    });

    totalPrice.innerHTML = 'Total: $' + total.toFixed(2);
  }

  // Plan seçeneklerine tıklanınca
  document.querySelectorAll('.plan-option').forEach(option => {
    option.addEventListener('click', function () {
      document.querySelectorAll('.plan-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      updateConfirmationSummary();
    });
  });

  // Monthly / Yearly seçeneklerine tıklanınca
  document.querySelectorAll('input[name="billing"]').forEach(option => {
    option.addEventListener('change', function () {
      updateConfirmationSummary();
    });
  });

  // Add-on seçeneklerine tıklanınca
  document.querySelectorAll('.addon-option input').forEach(option => {
    option.addEventListener('change', function () {
      updateConfirmationSummary();
    });
  });

  // İlk adımı göster
  showStep(1);
});
