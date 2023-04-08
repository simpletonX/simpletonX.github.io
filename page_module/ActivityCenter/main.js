
const global = {
  column: -1,
  jsonData: null,
  ajaxDefaultData: (urlString, callback) => {
    jquery.ajax({
      type: "get",
      url: urlString,
      success: val => {
        val = JSON.parse(val)
        global.jsonData = val
        callback && callback(
          val.length
        )
      }
    })
  },
  timeTransform: time => {
    time /= 1000
    return {
      day: parseInt(`${time / 60 / 60 / 24}`),
      hour: parseInt(`${time / 60 / 60 % 24}`),
      minute: parseInt(`${time / 60 % 60}`),
      second: parseInt(`${time % 60}`)
    }
  },
  topRightTime: () => {
    const date = `${ new Date() }`
    jquery(".nowTime").html(
      `${ date.slice(0, date.indexOf('GMT')) }`
    )
  },
  printItem: ele => {
    global.column++
    jquery(".column").eq(global.column).get(0).innerHTML += ele
    if (global.column === 3) {
      global.column = -1
    }
  },
  printTime: items => {
    const temp_date = `${ new Date() }`
    document.querySelector('.nowTime').innerHTML = `${ temp_date.slice(0, temp_date.indexOf('GMT')) }`
    for (let i = 0; i < items.length; i++) {
      const time_ = new Date(jquery(items[i]).attr("data-time")).getTime() - new Date().getTime()
      const td = global.timeTransform(time_)
      items[i].innerHTML = `${td.day < 10 ? '0' + td.day : td.day}天 ${td.hour < 10 ? '0' + td.hour : td.hour}: ${td.minute < 10 ? '0' + td.minute : td.minute}: ${td.second < 10 ? '0' + td.second : td.second}`
    }
  },
  descriptionOpen: order => {
    const temp_data = global.jsonData[order]

    document.querySelector('.data-mask').className = 'data-mask true'
    document.querySelector('.view').className = 'view dark'

    // type
    document.querySelector('.data-container_ .j_type').innerHTML = temp_data.activityAddr
    // image
    document.querySelector('.data-container_ .item-img img').src = JSON.parse(temp_data.posterUrl)[0].httpUrl
    // name
    document.querySelector('.data-container_ .j_name').title = temp_data.activityName
    document.querySelector('.data-container_ .j_name').innerHTML = temp_data.activityName
    // time
    document.querySelector('.data-container_ .j_enrollStartTime').innerHTML = `${temp_data.enrollStartTime} - ${temp_data.enrollEndTime}`
    document.querySelector('.data-container_ .j_startTime').innerHTML = `${temp_data.startTime} - ${temp_data.endTime}`
    // 报名人数
    document.querySelector('.data-container_ .j_limitDesc').innerHTML = temp_data.limitDesc
    // 活动类型
    document.querySelector('.data-container_ .j_ac_type').innerHTML = `${temp_data.activityTypeDesc} / ${temp_data.isCommunityDesc}`
    // 活动发起组织
    document.querySelector('.data-container_ .j_launch').innerHTML = temp_data.launchOrgName
    // 主办单位&承办单位
    document.querySelector('.data-container_ .j_hostOrgName').innerHTML = temp_data.hostOrgName + ' / ' + temp_data.contractorName
    // 活动对象
    document.querySelector('.data-container_ .j_peopleGroupTypeDesc').innerHTML = temp_data.peopleGroupTypeDesc
    // 测评加分项
    document.querySelector('.data-container_ .j_title').innerHTML = temp_data.title
  }
}

jquery("document").ready(() => {

  let des_index = 0

  global.jsonData = applicationData

  global.topRightTime(
    // currentTime ->
  )
  setInterval(() => {
    global.topRightTime(
      // currentTime setInterval ->
    )
  }, 1000);
  // The subject after the request is completed is written here
  (function () {
    // start main()
    // global_.loadingClose()
    global.jsonData.forEach((ele, index) => {

      const el = `<div class="item" title="${ ele.title }">
                <div class="content" style="animation: upSlide .2s; animation-delay: ${ index * 0.05 }s; animation-fill-mode: backwards;" data-index="${ index }" data-link="${ ele.link }">
                    <div class="online-icon">${ ele.range }</div>
                    <img src="${ ele.image }" alt="error">
                    <div class="text">
                        <div class="type">${ ele.type }</div>
                        <div class="clip-line"></div>
                        <div class="name">${ ele.title }</div>
                        <div class="time">${ ele.update_time }</div>
                    </div>
                </div>
            </div>`

      global.printItem(el)

    })

    jquery(".item .content").each((order, ele) => {
      ele.onclick = function () {
        const temp_data = this.getAttribute('data-link')
        if (temp_data) {
          window.open(temp_data)
        }
      }
    })

  })()

})