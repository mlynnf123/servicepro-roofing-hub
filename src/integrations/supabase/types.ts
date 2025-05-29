export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          entity_id: string
          entity_type: string
          id: string
          organization_id: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          entity_id: string
          entity_type: string
          id?: string
          organization_id?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          entity_id?: string
          entity_type?: string
          id?: string
          organization_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      api_usage_logs: {
        Row: {
          cost_cents: number | null
          created_at: string | null
          endpoint: string | null
          error_message: string | null
          id: string
          organization_id: string
          processing_time_ms: number | null
          provider: string
          request_data: Json | null
          response_data: Json | null
          success: boolean | null
        }
        Insert: {
          cost_cents?: number | null
          created_at?: string | null
          endpoint?: string | null
          error_message?: string | null
          id?: string
          organization_id: string
          processing_time_ms?: number | null
          provider: string
          request_data?: Json | null
          response_data?: Json | null
          success?: boolean | null
        }
        Update: {
          cost_cents?: number | null
          created_at?: string | null
          endpoint?: string | null
          error_message?: string | null
          id?: string
          organization_id?: string
          processing_time_ms?: number | null
          provider?: string
          request_data?: Json | null
          response_data?: Json | null
          success?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_recipients: {
        Row: {
          campaign_id: string | null
          created_at: string | null
          id: string
          lead_id: string | null
          status: Database["public"]["Enums"]["recipient_status"]
          updated_at: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["recipient_status"]
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["recipient_status"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_recipients_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_recipients_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          click_rate: number | null
          content: string | null
          created_at: string | null
          id: string
          name: string
          open_rate: number | null
          organization_id: string | null
          recipients: number | null
          scheduled_for: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["campaign_status"]
          subject: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          name: string
          open_rate?: number | null
          organization_id?: string | null
          recipients?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["campaign_status"]
          subject: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          name?: string
          open_rate?: number | null
          organization_id?: string | null
          recipients?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["campaign_status"]
          subject?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      change_orders: {
        Row: {
          created_at: string | null
          id: string
          lead_id: string | null
          order_data: Json
          order_number: string
          organization_id: string | null
          signatures: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          lead_id?: string | null
          order_data: Json
          order_number: string
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          lead_id?: string | null
          order_data?: Json
          order_number?: string
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "change_orders_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "change_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          contract_data: Json
          contract_number: string
          created_at: string | null
          id: string
          lead_id: string | null
          organization_id: string | null
          signatures: Json | null
          updated_at: string | null
        }
        Insert: {
          contract_data: Json
          contract_number: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Update: {
          contract_data?: Json
          contract_number?: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_roof_profiles: {
        Row: {
          address: string
          architectural_style: string | null
          created_at: string | null
          current_material: string | null
          customer_id: string
          id: string
          installation_date: string | null
          notes: string | null
          organization_id: string
          roof_pitch: string | null
          roof_type: string | null
          square_footage: number | null
          story_count: number | null
          updated_at: string | null
        }
        Insert: {
          address: string
          architectural_style?: string | null
          created_at?: string | null
          current_material?: string | null
          customer_id: string
          id?: string
          installation_date?: string | null
          notes?: string | null
          organization_id: string
          roof_pitch?: string | null
          roof_type?: string | null
          square_footage?: number | null
          story_count?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          architectural_style?: string | null
          created_at?: string | null
          current_material?: string | null
          customer_id?: string
          id?: string
          installation_date?: string | null
          notes?: string | null
          organization_id?: string
          roof_pitch?: string | null
          roof_type?: string | null
          square_footage?: number | null
          story_count?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_roof_profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string | null
          file_url: string | null
          id: string
          is_active: boolean | null
          name: string
          organization_id: string | null
          template: Json
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          organization_id?: string | null
          template: Json
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          organization_id?: string | null
          template?: Json
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      estimates: {
        Row: {
          created_at: string | null
          customer_info: Json
          id: string
          labor: Json
          lead_id: string | null
          materials: Json
          organization_id: string | null
          project_details: Json
          signatures: Json | null
          totals: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_info: Json
          id?: string
          labor: Json
          lead_id?: string | null
          materials: Json
          organization_id?: string | null
          project_details: Json
          signatures?: Json | null
          totals: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_info?: Json
          id?: string
          labor?: Json
          lead_id?: string | null
          materials?: Json
          organization_id?: string | null
          project_details?: Json
          signatures?: Json | null
          totals?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estimates_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estimates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      form_submissions: {
        Row: {
          created_at: string | null
          data: Json
          id: string
          lead_id: string | null
          organization_id: string | null
          template_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data: Json
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          template_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data?: Json
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          template_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_submissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_submissions_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      inspections: {
        Row: {
          created_at: string | null
          findings: Json
          id: string
          inspection_date: string
          inspector_id: string | null
          organization_id: string | null
          photos: Json[] | null
          project_id: string | null
          recommendations: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          findings: Json
          id?: string
          inspection_date: string
          inspector_id?: string | null
          organization_id?: string | null
          photos?: Json[] | null
          project_id?: string | null
          recommendations?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          findings?: Json
          id?: string
          inspection_date?: string
          inspector_id?: string | null
          organization_id?: string | null
          photos?: Json[] | null
          project_id?: string | null
          recommendations?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inspections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inspections_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          organization_id: string | null
          phone: string | null
          source: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      material_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          organization_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          organization_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          organization_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "material_categories_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          organization_id: string | null
          read: boolean | null
          read_at: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          organization_id?: string | null
          read?: boolean | null
          read_at?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          organization_id?: string | null
          read?: boolean | null
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_members: {
        Row: {
          created_at: string | null
          id: string
          organization_id: string | null
          role: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          organization_id?: string | null
          role: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          organization_id?: string | null
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          logo_url: string | null
          name: string
          settings: Json | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          settings?: Json | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          settings?: Json | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      photos: {
        Row: {
          created_at: string | null
          created_by: string | null
          entity_id: string
          entity_type: string
          id: string
          name: string | null
          organization_id: string | null
          size: number | null
          type: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          entity_id: string
          entity_type: string
          id?: string
          name?: string | null
          organization_id?: string | null
          size?: number | null
          type?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          name?: string | null
          organization_id?: string | null
          size?: number | null
          type?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "photos_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          actual_cost: number | null
          budget: number | null
          created_at: string | null
          details: Json | null
          end_date: string | null
          id: string
          lead_id: string | null
          name: string
          organization_id: string | null
          start_date: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          actual_cost?: number | null
          budget?: number | null
          created_at?: string | null
          details?: Json | null
          end_date?: string | null
          id?: string
          lead_id?: string | null
          name: string
          organization_id?: string | null
          start_date?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          actual_cost?: number | null
          budget?: number | null
          created_at?: string | null
          details?: Json | null
          end_date?: string | null
          id?: string
          lead_id?: string | null
          name?: string
          organization_id?: string | null
          start_date?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      roof_visualizations: {
        Row: {
          created_at: string | null
          created_by: string | null
          customer_access_token: string | null
          customer_feedback: Json | null
          customer_id: string | null
          estimated_cost: number | null
          id: string
          material_quantities: Json | null
          organization_id: string
          original_image_url: string
          processing_notes: string | null
          project_id: string | null
          provider_job_id: string | null
          roof_measurements: Json | null
          roof_segments: Json | null
          selected_materials: Json
          status: string | null
          updated_at: string | null
          viewed_by_customer_at: string | null
          visualized_image_url: string | null
          visualizer_provider: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          customer_access_token?: string | null
          customer_feedback?: Json | null
          customer_id?: string | null
          estimated_cost?: number | null
          id?: string
          material_quantities?: Json | null
          organization_id: string
          original_image_url: string
          processing_notes?: string | null
          project_id?: string | null
          provider_job_id?: string | null
          roof_measurements?: Json | null
          roof_segments?: Json | null
          selected_materials: Json
          status?: string | null
          updated_at?: string | null
          viewed_by_customer_at?: string | null
          visualized_image_url?: string | null
          visualizer_provider: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          customer_access_token?: string | null
          customer_feedback?: Json | null
          customer_id?: string | null
          estimated_cost?: number | null
          id?: string
          material_quantities?: Json | null
          organization_id?: string
          original_image_url?: string
          processing_notes?: string | null
          project_id?: string | null
          provider_job_id?: string | null
          roof_measurements?: Json | null
          roof_segments?: Json | null
          selected_materials?: Json
          status?: string | null
          updated_at?: string | null
          viewed_by_customer_at?: string | null
          visualized_image_url?: string | null
          visualizer_provider?: string
        }
        Relationships: [
          {
            foreignKeyName: "roof_visualizations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      shingle_materials: {
        Row: {
          color_code: string | null
          color_name: string
          created_at: string | null
          id: string
          is_active: boolean | null
          manufacturer: string
          material_type: string | null
          organization_id: string
          price_per_square: number | null
          product_line: string
          product_name: string
          texture_url: string | null
          updated_at: string | null
          warranty_years: number | null
        }
        Insert: {
          color_code?: string | null
          color_name: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manufacturer: string
          material_type?: string | null
          organization_id: string
          price_per_square?: number | null
          product_line: string
          product_name: string
          texture_url?: string | null
          updated_at?: string | null
          warranty_years?: number | null
        }
        Update: {
          color_code?: string | null
          color_name?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manufacturer?: string
          material_type?: string | null
          organization_id?: string
          price_per_square?: number | null
          product_line?: string
          product_name?: string
          texture_url?: string | null
          updated_at?: string | null
          warranty_years?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shingle_materials_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          api_endpoint: string | null
          api_key: string | null
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          api_endpoint?: string | null
          api_key?: string | null
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          api_endpoint?: string | null
          api_key?: string | null
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_calendar_tokens: {
        Row: {
          access_token: string
          created_at: string | null
          expires_at: string | null
          id: string
          provider: string
          refresh_token: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          access_token: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          provider: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          provider?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      visualization_comparisons: {
        Row: {
          created_at: string | null
          created_by: string | null
          customer_id: string
          id: string
          name: string
          notes: string | null
          organization_id: string
          visualization_ids: string[]
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          customer_id: string
          id?: string
          name: string
          notes?: string | null
          organization_id: string
          visualization_ids: string[]
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          customer_id?: string
          id?: string
          name?: string
          notes?: string | null
          organization_id?: string
          visualization_ids?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "visualization_comparisons_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_default_roof_materials: {
        Args: { org_id: string }
        Returns: undefined
      }
      get_lead_sources_count: {
        Args: { filter_start_date: string; filter_end_date: string }
        Returns: {
          source: string
          count: number
        }[]
      }
      get_project_types_count: {
        Args: { filter_start_date: string; filter_end_date: string }
        Returns: {
          type: string
          count: number
        }[]
      }
      get_visualization_by_token: {
        Args: { access_token: string }
        Returns: {
          id: string
          original_image_url: string
          visualized_image_url: string
          selected_materials: Json
          status: string
          created_at: string
        }[]
      }
      handle_photo_upload: {
        Args: {
          p_organization_id: string
          p_entity_type: string
          p_entity_id: string
          p_url: string
          p_name: string
          p_size: number
          p_type: string
        }
        Returns: {
          created_at: string | null
          created_by: string | null
          entity_id: string
          entity_type: string
          id: string
          name: string | null
          organization_id: string | null
          size: number | null
          type: string | null
          url: string
        }
      }
      update_customer_feedback: {
        Args: { access_token: string; feedback_data: Json }
        Returns: boolean
      }
    }
    Enums: {
      campaign_status: "draft" | "scheduled" | "sending" | "sent" | "failed"
      recipient_status:
        | "pending"
        | "sent"
        | "failed"
        | "opened"
        | "clicked"
        | "unsubscribed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      campaign_status: ["draft", "scheduled", "sending", "sent", "failed"],
      recipient_status: [
        "pending",
        "sent",
        "failed",
        "opened",
        "clicked",
        "unsubscribed",
      ],
    },
  },
} as const
