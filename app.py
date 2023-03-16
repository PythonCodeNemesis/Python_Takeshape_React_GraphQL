from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api/posts')
def get_posts():
    response = requests.get('https://api.takeshape.io/project/<project ID>/graphql', headers={
        'Authorization': 'Bearer ' + '<bearer token>',  #'933d49399a8f4297930ac990d047e0fb',
        'Content-Type': 'application/json'
    }, json={
        'query': '''
          {
          getPostList {
            items {
              _id
              author {
                _id
                biography
                name
                slug
              }
              body
              deck
              featureImage {
                _id
                caption
                credit
                description
                filename
                mimeType
                path
                sourceUrl
                title
                uploadStatus
              }
              slug
              tags {
                _id
                name
              }
              title
            }
            total
          }
        }
        '''
    })

    print("RESPONSE",response)
    response.raise_for_status()
    print(response.json())
    posts = response.json()['data']['getPostList']['items']  
    
    print(posts)
    return jsonify(posts)

if __name__ == '__main__':
    app.run(debug=True)
