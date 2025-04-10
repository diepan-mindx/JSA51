# Khai báo mảng 
> Cách 1: `const arr = [12, 'a', 0.5, false]`

> Cách 2: `const arr = Array.of(12, 'a', 0.5, false)`

# Truy vấn
- `arr[index]` : Lấy giá trị của phần tử ở vị trí index
> Lấy phần tử ở vị trí thứ 2: `arr[1]`

# Duyệt phần tử
- for i: duyệt bằng độ dài phần tử => **duyệt cả phần tử rỗng (undefined, null)**
```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // in ra từng phần tử trong dánh sách
}
```
- for of: duyệt bằng phần tử => **duyệt cả phần tử rỗng**
```js
for (const item of arr) {
    console.log(item) 
}
```
- forEach: duyệt bằng phần tử => **không duyệt phần tử rỗng**
```js
const empty_arr = Array(10); // danh sach gom 10 item undefined
empty_arr.forEach(item => console.log(item));
```
- map (ES6): duyệt bằng phần tử => **duyệt cả phần tử rỗng** + **return danh sách mới**
```js
const empty_arr = Array(10); // danh sach gom 10 item undefined
empty_arr.map(item => console.log(item));
```
# Thêm phần tử
- `push(new_item)`: thêm phần tử vào cuối danh sách
```js
arr.push(100); // [..., 100]
```
- `splice(start, 0, new_item)`: chèn phần tử vào vị trí start
```js
arr.splice(2, 0, 100); // [item1, item2, 100, item3, ...]
```

# Cập nhật phần tử
- `splice(start, 1, new_item)`: thay phần tử vào vị trí start
```js
// thay item3 => 100
arr.splice(2, 1, 100); // [item1, item2, 100, item4, ...]
```
- `arr[index] = new_item`: thay phần tử ở vị trí index
```js
arr[2] = 12; // thay phần tử thứ 3 thành 12
```

# Tìm kiếm index của phần tử
- `indexOf(item)`: tìm kiếm vị trí của phần tử item
```js
arr.indexOf('item3'); // trả về số index đầu tiên
```

# Xóa phần tử
- `splice(start, n)`: xóa n phần tử ở vị trí start => **trả về danh sách đã bị cắt khỏi danh sách ban đầu**
```js
arr.splice(0, 2); // xóa 2 phần tử bắt đầu từ vị trí 0
```

# Tạo bản sao
> Cách 1: sử dụng `slice` (ES5)
```js
const arr_clone = arr.slice(); 
```
> Cách 2: sử dụng spread operator (ES6)
```js
const arr_clone = [...arr, ...arr1]; // gộp 2 mảng arr, arr1 
```
> Cách 3: sử dụng `Array.from` (ES6)
```js
const arr_clone = Array.from(arr);
```