# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_11_041319) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.text "body", null: false
    t.integer "upvote_count", null: false
    t.integer "passage_id", null: false
    t.integer "annotator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "start_idx", null: false
    t.integer "end_idx", null: false
    t.index ["annotator_id"], name: "index_annotations_on_annotator_id"
    t.index ["passage_id"], name: "index_annotations_on_passage_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "passage_id", null: false
    t.integer "commenter_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
    t.index ["passage_id"], name: "index_comments_on_passage_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "annotation_id", null: false
    t.integer "upvoter_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["annotation_id"], name: "index_likes_on_annotation_id"
    t.index ["upvoter_id"], name: "index_likes_on_upvoter_id"
  end

  create_table "passages", force: :cascade do |t|
    t.string "title", null: false
    t.string "author", null: false
    t.text "body", default: "{}", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
