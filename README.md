chinese-javascript
=============================
> use chinese coding javascript

## How to use

```js
<script src="https://rawgit.com/tooto1985/chinese-javascript/master/translate.js"></script>
<script type="text/translate">
  //coding at here
</script>
```

## Example

```js
	<script type="text/translate">
		$(函數() {
			函數 計算(錢,人數) {
				宣告 結果;
				嘗試 {
					結果=錢/人數;
					如果(為非數值(結果)) {
						結果="非數值";
					} 其他 如果(不為有限(結果)) {
						結果="無限大";
					}
				} 捕捉(訊息) {
					對話框("發生錯誤");
				} 最後 {
					$平均輸入框.值(結果);
				}
			}
			函數 共用() {
				計算($錢輸入框.值(),$人數輸入框.值());
			}
			宣告 $錢輸入框 = $("#錢");
			宣告 $人數輸入框 = $("#人數");
			宣告 $平均輸入框 = $("#平均");
			$錢輸入框.鍵盤放開(共用);
			$人數輸入框.鍵盤放開(共用);
		});
	</script>
```

## Demo

https://rawgit.com/tooto1985/chinese-javascript/master/index.html

## License

This code is licensed under the MIT License.
