class Jajargenjang {
    constructor(length, width) {
        this.length = length;
        this.width  = width;
        this._jajarGenjangList = [];
    }

    generateJajarGenjang() {
        var startIndex  = 0;
        var endIndex    = 0;

        for(let i = 0; i <= this.length+1; i++) {
            var bentuk      = [];
            if(i == 0) {
                for(let j = 0; j < this.width;j++) {
                    bentuk.push('-')
                }
                this._jajarGenjangList.push(bentuk);
                endIndex   = this._jajarGenjangList[i].length + 1;
            } else if (i > 0 && i <= this.length) { 
                for(let j = 0; j <= endIndex;j++) {
                    if(j == startIndex || j == endIndex) {
                        bentuk.push("\\");
                    } else {
                        bentuk.push(" ");
                    }
                }
                this._jajarGenjangList.push(bentuk);
                startIndex = startIndex + 1;
                endIndex   = this._jajarGenjangList[i].length;
            } else {
                var counterWidth = 0;
                for(let j = 0; j < endIndex;j++) {
                    if (j >= startIndex + 1) {
                        counterWidth = counterWidth + 1;
                        if(counterWidth <= this.width) {
                            bentuk.push("-");
                        }
                    } else {
                        bentuk.push(" ");
                    }
                }
                this._jajarGenjangList.push(bentuk);
            }
        }

        return this._jajarGenjangList;
    }

    printJajarGenjang() {
        for(let i = 0; i < this._jajarGenjangList.length; i++) {
            let str = '';
            for(let j = 0; j < this._jajarGenjangList[i].length;j++) {
                str = str + this._jajarGenjangList[i][j]
            }
            console.log(str);
        }
    }
}


var jG = new Jajargenjang(5,10);
jG.generateJajarGenjang();
jG.printJajarGenjang();

