function getCount(objects) {

    var flag = 0;
    for (var o in objects) {
        if (objects[o].x == objects[o].y) {
            
            flag++;
        }
    }
    return flag;  
}


