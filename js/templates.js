<script id="Card-Template" type="text/x-handlebars-template">
  <div class='content-card'>

    <p>{{headline}}</p>
    <h2>{{question}}</h2>

    <ul class="question-list">
      {{#each answers}}
        <li>
          <input type="radio" id="radio_{{answer}}" name="radio" />
          <label for="radio_{{answer}}"><span class="wrap"><span class="bullet"></span></span>{{answer}}</label>
        </li>
      {{/each}}
    </ul>
    <div class="slideWrapper">
      <div class="rangeOutput" id="rangeOutput">5</div>
      <div class="slidecontainer">
        <input type="range" min="0" max="10" value="5" class="slider" id="myRange">
      </div>
      <div>Strongly disagree = 0</div>
      <div>Strongly agree = 10</div>
    </div>

  </div>

</script>

<script id="Panel-Template" type="text/x-handlebars-template">
  <div class="panelContent">

    <h2>{{panelHeading}}</h2>
    <p>{{panelBody}}</p>

    <div class='btn-wrapper'>

      <button id="Btn_Start" class='btn btn-primary'>{{btnLabel}}</button>
      <!-- <button id="Btn_Close" class='btn btn-primary'>Close</button> -->
    </div>

  </div>
</script>
