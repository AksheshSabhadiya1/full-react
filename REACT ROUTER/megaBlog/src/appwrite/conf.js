import config from "../config/config";
import {Client, Databases, Storage, Query, ID} from 'appwrite'

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    async createPost({title, slug, content, featuredimage, status, userid}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid,
                }
            )

        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    async updatePost(slug, {title, content, featuredimage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            )

        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )

        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    async getAllPost(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal('status','Active')
                ]
            )
            
        } catch (error) {
            console.log("Appwrite serive :: getAllPost :: error", error);
            return false
        }
    }




    //file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }


    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
    

    getFilePreview(fileId){
        if(!fileId) return ''
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const appwriteService = new Service()

export default appwriteService