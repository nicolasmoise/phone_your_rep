var gulp = require('gulp')
var concat = require('gulp-concat')
var handlebars = require('gulp-compile-handlebars')
var rename = require('gulp-rename')
var reps = require('./app/generate-reps/reps.json')

gulp.task('handlebars', function() {
	var options = {
		helpers: {
			ifNull : function(str){
				if(str) { return str }
				else { return null }
			},
			socialLink : function(baseUrl, url, icon){
				if(url){
					return '<a class="card-link" href="' + baseUrl + url + '" target="_blank"><i class="fa fa-icon ' + icon + '" aria-hidden="true"></i></a>';
				}else{
					return null;
				}
			},
			thisURL : function(first, last){
				var url = "https://www.phoneyourrep.com/reps/" + first.toLowerCase() + "_" + last.toLowerCase();
				return url;
			},
			hours : function(hours){
				if(hours){
					return "Hours: " + hours;
				}else{
					return "Hours?: Let us know on Twitter @phoneyourrep"
				}
			}
		}
	}

    for (var i = 0; i < reps.length; i++) {
        var rep = reps[i];
        var folderName = rep.first.toLowerCase() + '_' + rep.last.toLowerCase()

		console.log(folderName);


        gulp.src('app/generate-reps/templates/rep.handlebars')
            .pipe(handlebars(rep, options))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('docs/reps/' + folderName + '/'));
    }

	gulp.src('app/generate-reps/css/*.css')
		.pipe(concat('reps.css'))
		.pipe(gulp.dest('docs/reps'))

	gulp.src('app/images/*')
		.pipe(gulp.dest('docs/reps/images'))
});


gulp.task('default', ['handlebars']);
