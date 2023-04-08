/*
  # 页面初始化数据-配置脚本
  # Page Initialization Data Configuration Script
  # v1.0.0 - @Simpleton-element
  # author: wx(FordjQuery) & wx(h3034962808)
  # update: 2023-04-03
*/

const global_ = {
  ajaxState: 0,
  ajaxDefaultData: (urlString, callback) => {
    jquery.ajax({
      type: "get",
      url: urlString,
      success: val => {
        val = JSON.parse(val)
        callback && callback(
          val.length
        )
      }
    })
  },
  wallpaper: "https://gitee.com/hdf3243/images/raw/master/images/default.jpg",
  person_header: {
    head_sculpture_path: "https://gitee.com/hdf3243/images/raw/master/images/head_sculpture.jpg",
    nickname: "JavaScript God",
    description: "God's Language."
  },
  copyright: {
    icon_url: "./src/images/icon_library/simple-element-logo.svg",
    assembly_name: "Simple-element",
    copyright_source: "&copy;Alligator from simpleton"
  },
  main_navigation: {
    icon_prefixPath: "./src/images/icon_library/navigation/",
    jump_prefixPath: "./page_module/",
    content: [
      {
        icon_url: "ActivityCenter.svg",
        jump_url: "ActivityCenter/index.html",
        point_out: "智慧3.0活动中心",
        description: "Activity center",
        label: true
      }, {
        icon_url: "CourseScript.svg",
        jump_url: "CourseScript/index.html",
        point_out: "泛平台刷课脚本",
        description: "Course script",
        label: false
      }, {
        icon_url: "DesignInspiration.svg",
        jump_url: "DesignInspiration/index.html",
        point_out: "UI设计灵感素材库",
        description: "Design inspiration",
        label: false
      }, {
        icon_url: "SelectedActivity.svg",
        jump_url: "SelectedActivity/index.html",
        point_out: "已报名活动",
        description: "Selected activity",
        label: true
      }, {
        icon_url: "BasicSettings.svg",
        jump_url: "BasicSettings/index.html",
        point_out: "基础设置",
        description: "Basic settings",
        label: false
      }, {
        icon_url: "PersonCenter.svg",
        jump_url: "PersonCenter/index.html",
        point_out: "个人中心",
        description: "Person center",
        label: false
      }, {
        icon_url: "PushService.svg",
        jump_url: "PushService/index.html",
        point_out: "推送服务",
        description: "Push service",
        label: false
      },
    ]
  },
  create_nav: data => {
    return `
          <div class="navigation-item" title="${ data.point_out }" data-link="${ data.jump_url }" data-index="${ data.index }">
            <div class="flex y-center">
              <img src="${ data.icon_url }" alt="x">
              <p>${ data.description }</p>
            </div>
            ${ data.label ? "<div class=\"label\">not</div>" : "" }
          </div>
    `
  },
  nav_interaction: index => {
    const height = jquery(".navigation-item:eq(0)").height()
    const des_block = jquery(".des-block")
    const slide_block = jquery(".slide-block")
    des_block.css(
      "top", `${ index * height + 20 + ((height - des_block.height()) / 2) }px`
    )
    slide_block.css(
      "top", `${ index * height + 20 }px`
    )
  },
  timer: null,
  frame_jump: path => {
    jquery("#page_frame").prop(
      "src", ""
    )
    global_.loading()
    clearTimeout(global_.timer)
    global_.timer = setTimeout(() => {
      global_.loadingClose()
      jquery("#page_frame").prop(
        "src", path
      )
    }, 600)
  },
  loading: callback => {
    document.querySelector('.loading').classList.add('true')
    document.querySelector('.loading').innerHTML = `<?xml version="1.0" encoding="UTF-8"?><svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1e5b82" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="steelblue" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <div class="load-text">
                      <span>F</span>
                      <span>u</span>
                      <span>l</span>
                      <span>l</span>
                      <span>y</span>
                      <span>&nbsp;</span>
                      <span>l</span>
                      <span>o</span>
                      <span>a</span>
                      <span>d</span>
                      <span>e</span>
                      <span>d</span>
                  </div>`
    const spans = document.querySelectorAll('.loading span')
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.animationDelay = (i * 0.05) + 's'
    }
    callback && callback()
  },
  loadingClose: () => {
    document.querySelector('.loading').innerHTML = ''
    document.querySelector('.loading').classList.remove('true')
  }
}

global_.main_navigation.content.forEach(ele => {
  ele.icon_url = global_.main_navigation.icon_prefixPath + ele.icon_url
  ele.jump_url = global_.main_navigation.jump_prefixPath + ele.jump_url
})

console.log("Project-global-ready ->", global_)
