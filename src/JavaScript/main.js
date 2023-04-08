
function loadData(data) {

  jquery("body").css({
    "background-image": `url( ${ global_.wallpaper } )`
  })

  jquery(".container").attr( "data-state", "ready" )

  jquery(".head-sculpture img").prop(
    "src", global_.person_header.head_sculpture_path
  )

  jquery(".header .nickname").html(
    global_.person_header.nickname
  )

  jquery(".header .description").html(
    global_.person_header.description
  )

  global_.main_navigation.content.forEach((ele, index) => {
    ele.index = index
    jquery(".main-navigation-list").html(
      jquery(".main-navigation-list").html() +
      global_.create_nav(ele)
    )
  })

  global_.nav_interaction(0)

  jquery(".navigation-item").each((index, ele) => {
    jquery(ele).css({
      "animation": "upSlide .2s",
      "animation-fill-mode": "backwards",
      "animation-delay": `${ index * 0.07 }s`
    }).click(() => {
      global_.nav_interaction(index)
      global_.frame_jump(
        jquery(ele).attr(
          "data-link"
        )
      )
    })
  })

  jquery(".navigation-item:eq(0) .label").html(`${ applicationData.length }`)

  // Selected list -> null( current )

  /*
    jquery(".navigation-item:eq(3) .label").html(
      `${ global_.ajaxReturn.length }`
    )
  */

}

jquery("document").ready(() => {

  loadData(
    applicationData
  )

  global_.frame_jump(
    jquery(
      ".navigation-item:eq(0)"
    ).attr(
      "data-link"
    )
  )

  if (jquery === jQuery)
    console.log(
      "jquery copy ready ->",
      jquery("body")
    )

})