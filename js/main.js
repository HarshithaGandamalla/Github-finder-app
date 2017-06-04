$(document).ready(function(){

      $('#searchUser').on('keyup',function(e){

        //console.log('key pressed');
      //  console.log(e.target.value);
        let username=e.target.value;

        //Make request to Github
        $.ajax({
           url:'https://api.github.com/users/'+username,
           data:{
              client_id:'7f96af53ae3c7cb2d892',
              client_secret:'f6017a57eca7841f657629855613768c9234bf60'
           }
        }).done(function(user){

           //console.log(user);
           $('#profile').html(`
             <div class="panel panel-default">
               <div class="panel-heading">${user.name}</div>
               <div class="panel-body">
                   <div class="row">
                     <div class="col-md-3">
                        <img class="thumbnail avatar" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>

                     </div>
                     <div class="col-md-9">
                     <span class="label label-default">Public Repos: ${user.public_repos}</span>
                     <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                     <span class="label label-success">Followers: ${user.followers}</span>
                     <span class="label label-info">Following: ${user.following}</span>
                     <br><br>
                     <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>

                     </ul>
                     </div>
                   </div>
               </div>
             </div>



             `);

        });


      });


});
