var year = 1999
var month = 12
var date = 16
yy = 0
yy = year % 400
console.log(yy)
if (yy > 100) {
    cy = yy % 100
    console.log(cy)
    d = yy - cy
    console.log(d)

    if (d == 100) {
        k = 5
    } else if (d == 200) {
        k = 3
    } else if (d == 300) {
        k = 1
    } else if (d == 400) {
        k = 0
    }
    console.log(k)
    oo = cy - 1
    op = oo / 4
    feb = 28
    p = Math.floor(op)
    console.log(p)
    m = oo - p
    console.log((m * 1) + (2 * p))
    hju = ((m * 1) + (2 * p)) % 7
    console.log(hju)
    if (year % 400 == 0 && year % 4 == 0) {
        feb = 28 + 1
    }
    console.log(feb)
    var jan = 31
    var mar = 31
    var apr = 30
    var may = 31
    var jun = 30
    var jul = 31
    var aug = 31
    var sep = 30
    var oct = 31
    var nov = 30
    var dec = 31

    if (month == 1) {
        dh = date
    }
    if (month == 2) {
        dh = date + jan
    }
    if (month == 3) {
        dh = date + feb + jan
    }
    if (month == 4) {
        dh = date + jan + feb + mar
    }
    if (month == 5) {
        dh = date + jan + feb + mar + apr
    }
    if (month == 6) {
        dh = date + jan + feb + mar + apr + may
    }
    if (month == 7) {
        dh = date + jan + feb + mar + apr + may + jun
    }
    if (month == 8) {
        dh = date + jan + feb + mar + apr + may + jun + jul
    }
    if (month == 9) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug
    }
    if (month == 10) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep
    }
    if (month == 11) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep + oct
    }
    if (month == 12) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov
    }
    console.log(dh)

    fg = dh % 7
    var lk
    console.log(fg)
    if (fg + hju + k >= 7) {
        lk = (fg + hju + k) % 7
        console.log(lk)
    } else {
        lk = fg + hju + k
        console.log(lk)

    }
    if (lk == 0) {
        console.log("sunday")
    } else if (lk == 1) {
        console.log("Monday")
    } else if (lk == 2) {
        console.log("Tuesday")
    } else if (lk == 3) {
        console.log("wednesday")
    } else if (lk == 4) {
        console.log("Thursday")
    } else if (lk == 5) {
        console.log("friday")
    } else if (lk == 6) {
        console.log("saturday")
    }
} else {
    oo = yy - 1
    op = oo / 4
    feb = 28
    p = Math.floor(op)
    console.log(p)
    m = oo - p
    console.log((m * 1) + (2 * p))
    hju = ((m * 1) + (2 * p)) % 7
    console.log(hju)
    if (year % 400 == 0 && year % 4 == 0) {
        feb = 28 + 1
    }
    console.log(feb)
    var jan = 31
    var mar = 31
    var apr = 30
    var may = 31
    var jun = 30
    var jul = 31
    var aug = 31
    var sep = 30
    var oct = 31
    var nov = 30
    var dec = 31

    if (month == 1) {
        dh = date
    }
    if (month == 2) {
        dh = date + jan
    }
    if (month == 3) {
        dh = date + feb + jan
    }
    if (month == 4) {
        dh = date + jan + feb + mar
    }
    if (month == 5) {
        dh = date + jan + feb + mar + apr
    }
    if (month == 6) {
        dh = date + jan + feb + mar + apr + may
    }
    if (month == 7) {
        dh = date + jan + feb + mar + apr + may + jun
    }
    if (month == 8) {
        dh = date + jan + feb + mar + apr + may + jun + jul
    }
    if (month == 9) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug
    }
    if (month == 10) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep
    }
    if (month == 11) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep + oct
    }
    if (month == 12) {
        dh = date + jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov
    }
    console.log(dh)

    fg = dh % 7
    console.log(fg)
    if ((fg + hju) >= 7) {
        lk = (fg + hju) % 7
        console.log(lk)
    } else {
        lk = fg + hju
        console.log(lk)

    }
    if (lk == 0) {
        console.log("sunday")
    } else if (lk == 1) {
        console.log("Monday")
    } else if (lk == 2) {
        console.log("Tuesday")
    } else if (lk == 3) {
        console.log("wednesday")
    } else if (lk == 4) {
        console.log("Thursday")
    } else if (lk == 5) {
        console.log("friday")
    } else if (lk == 6) {
        console.log("saturday")
    }
}