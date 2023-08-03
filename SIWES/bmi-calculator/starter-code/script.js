
  const form = document.getElementById('myForm');
  const content1 = document.getElementById('content1');
  const content2 = document.getElementById('content2');

  form.addEventListener('change', function() {
    const selectedOption = document.querySelector('input[name="measurement-type"]:checked').value;
    
    if (selectedOption === 'Metric') {
      content1.style.display = 'block';
      content2.style.display = 'none';
    } else if (selectedOption === 'Imperial') {
      content1.style.display = 'none';
      content2.style.display = 'block';
    }
  });

  $(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".result").not(targetBox).hide();
        $(targetBox).show();
    });
});
