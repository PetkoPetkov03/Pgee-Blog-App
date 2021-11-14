import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const Articles = () => {
  const [articles, setArticles] = useState([]);

  type Id = string;

  const deleteArticle = async(id: Id) => {
    await fetch(`#`, {
      method: "DELETE",  
    });

    interface Article {
      title: string;
      _id: string;
      description: string;
      createdby: string;
      createdat: Date;

    }

    const filteredArticles = articles.filter((article: Article) => {
      article._id !== id
    })

    getArticles();  
  }

  const getArticles = async () => {
    const request = await fetch('#');
    const parsedBody = await request.json();

    setArticles(parsedBody);
  };

  useEffect(() => {
    getArticles();
  }, []);

  interface Article {
    title: string;
    _id: string;
    description: string;
    createdby: string;
    createdat: Date;
  }

  return (
    <ScrollView key="scroll" style={styles.scrowView}>
      {articles.map((article: Article) => {
        const date = new Date(`${article.createdat}`);
        return (
          <View key="to" style={styles.component}>
            <View key="view" style={styles.view}>
              <Text key="title" style={styles.text}>
                Title: {article.title}
              </Text>
              <Text key="desc" style={styles.text}>
                Description: {article.description}
              </Text>
              <Text key="cb" style={styles.text}>
                Created By: {article.createdby}
              </Text>
              <Text key="ca" style={styles.text}>
                Created At: {date.getDay()}:{date.getMonth()}:
                {date.getUTCFullYear()}
              </Text>
              <View style={styles.iconComponent}>
                <TouchableOpacity>
                  <Icon name="remove" size={30} color="firebrick" onPress={() => deleteArticle(article._id)} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="edit" size={30} color="blue" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconComponent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
  },
  scrowView: {
    flex: 1,
  },
  component: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  view: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Articles;
